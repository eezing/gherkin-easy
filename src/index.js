'use strict';

const loadAst = require('./load-ast');
const featureStructure = require('./feature-structure');

class FeatureTest {

    constructor(featurePath) {

        this.load = this.load.bind(this);

        if (featurePath) {
            this.feature = featureStructure.create(loadAst.fromPath(featurePath));
        }
    }

    load(featureAsString) {
        this.feature = featureStructure.create(loadAst.fromString(featureAsString));
    }
}

module.exports = FeatureTest;
