'use strict';

function gherkinStepsToObject(outlineSteps) {
    let lastKey;

    return outlineSteps.reduce((output, next) => {
        switch (next.keyword) {
        case 'Given ':
            output.given = `Given ${gherkinVarToTemplateVar(next.text)}`;
            lastKey = 'given';
            break;

        case 'When ':
            output.when = `When ${gherkinVarToTemplateVar(next.text)}`;
            lastKey = 'when';
            break;

        case 'Then ':
            output.then = `Then ${gherkinVarToTemplateVar(next.text)}`;
            lastKey = 'then';
            break;

        case 'And ':
            if (output[lastKey] === undefined) throw '"And" can\'t be first';
            output[lastKey] = `${output[lastKey]} And ${gherkinVarToTemplateVar(
          next.text
        )}`;
            break;
        }

        return output;
    }, {});
}

function gherkinVarToTemplateVar(string) {
    return string.replace(/</g, '${').replace(/>/g, '}');
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
