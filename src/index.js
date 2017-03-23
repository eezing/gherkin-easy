'use strict';

const loadAst = require('./load-ast');
const featureStructure = require('./feature-structure');

class FeatureTest {

    constructor(featurePath) {

        this.load = this.load.bind(this);
        this.run = this.run.bind(this);

        if (featurePath) {
            this.feature = featureStructure.create(loadAst.fromPath(featurePath));
        }

        console.dir(this.feature, { depth: null });
    }

    load(featureAsString) {
        this.feature = featureStructure.create(loadAst.fromString(featureAsString));
    }

    run() {

    }
}

module.exports = FeatureTest;
