'use strict';

function gherkinStepsToObject(outlineSteps) {

    return outlineSteps.reduce((prev, next) => {

        switch (next.keyword) {

        case 'Given ':
            prev.given = `Given ${gherkinVarToTemplateVar(next.text)}`;
            break;

        case 'And ':
            prev.given = `${prev.given.text} And ${gherkinVarToTemplateVar(next.text)}`;
            break;

        case 'When ':
            prev.when = `When ${gherkinVarToTemplateVar(next.text)}`;
            break;

        case 'Then ':
            prev.then = `Then ${gherkinVarToTemplateVar(next.text)}`;
            break;
        }

        return prev;

    }, {});
}

function gherkinVarToTemplateVar(string) {
    return string.replace('<', '${').replace('>', '}');
}

function typeToText(value) {

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
    gherkinStepsToObject,
    gherkinVarToTemplateVar,
    typeToText
};
