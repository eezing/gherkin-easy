'use strict';

const fs = require('fs');
const Gherkin = require('gherkin');
const parser = new Gherkin.Parser();

function fromPath(filePath) {
    const fileBody = fs.readFileSync(filePath, 'utf-8');
    return fromString(fileBody);
}

function fromString(string) {
    return parser.parse(string);
}

module.exports = {
    fromPath,
    fromString
};
