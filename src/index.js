'use strict';

const loadAst = require('./load-ast');
const featureStructure = require('./feature-structure');

class FeatureTest {

    constructor(featurePath) {

        this.load = this.load.bind(this);
        this.run = this.run.bind(this);
        this.feature = featurePath ? featureStructure.create(loadAst.fromPath(featurePath)) : undefined;

        console.dir(this.feature, { depth: null });
    }

    load(featureAsString) {
        this.feature = featureStructure.create(loadAst.fromString(featureAsString));
    }

    run() {

    }
}

module.exports = FeatureTest;
