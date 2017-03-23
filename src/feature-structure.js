'use strict';

const vm = require('vm');

function create({ feature }) {
    return {
        name: feature.name,
        outlines: getOutlines(feature.children)
    };
}

function getOutlines(featureChildren) {
    return featureChildren
        .filter(child => child.type === 'ScenarioOutline')
        .map(outline => ({
            name: outline.name,
            examples: getExamples(outline.examples, getSteps(outline.steps))
        }));
}

function getExamples(outlineExamples, steps) {

    return outlineExamples.map(({ tableHeader, tableBody }) => {

        return tableBody.map(ex => {

            const example = ex.cells.reduce((prev, curr, index) => {

                prev[tableHeader.cells[index].value] = eval(curr.value);

                return prev;

            }, {});

            return {
                given: compileStepText(steps.given, example),
                when: compileStepText(steps.when, example),
                then: compileStepText(steps.then, example),
                example
            };
        });
    }).reduce((prev, curr) => prev.concat(curr), []);
}

function getSteps(outlineSteps) {

    return outlineSteps.reduce((prev, next) => {

        switch (next.keyword) {

        case 'Given ':
            prev.given = `Given ${transformStepText(next.text)}`;
            break;

        case 'And ':
            prev.given = `${prev.given.text} And ${transformStepText(next.text)}`;
            break;

        case 'When ':
            prev.when = `When ${transformStepText(next.text)}`;
            break;

        case 'Then ':
            prev.then = `Then ${transformStepText(next.text)}`;
            break;
        }

        return prev;

    }, {});
}

function compileStepText(text, example) {

    let context = Object.keys(example).reduce((prev, curr, index, array) => {
        prev[curr] = exampleVarAsDisplay(example[curr]);
        return index === array.length - 1 ? new vm.createContext(prev) : prev;
    }, {});

    const script = new vm.Script('`' + text + '`');

    return script.runInContext(context);
}

function transformStepText(string) {
    return string.replace('<', '${').replace('>', '}');
}

function exampleVarAsDisplay(value) {

    switch (typeof value) {

    case 'string':
        return `"${value}"`;

    case 'object':
        return JSON.stringify(value);

    default:
        return value;
    }
}

module.exports = {
    create
};
