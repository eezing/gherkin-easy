'use strict';

const loadAst = require('load-ast');
const featureStructure = require('feature-structure');

class FeatureTests {

    constructor(featurePath) {
        this.feature = featureStructure.create(loadAst.fromPath(featurePath));
    }
}

module.exports = FeatureTests;
