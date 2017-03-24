'use strict';

const transforms = require('./transforms');
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
            examples: getExamples(outline.examples, transforms.gherkinStepsToObject(outline.steps))
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

function compileStepText(text, example) {

    let context = Object.keys(example).reduce((prev, curr, index, array) => {
        prev[curr] = transforms.typeToText(example[curr]);
        return index === array.length - 1 ? new vm.createContext(prev) : prev;
    }, {});

    const script = new vm.Script('`' + text + '`');

    return script.runInContext(context);
}

module.exports = {
    create
};
