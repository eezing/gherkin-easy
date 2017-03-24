'use strict';

const astLoad = require('./ast-load');
const astParse = require('./ast-parse');

class FeatureTest {

    constructor(featurePath) {

        this.load = this.load.bind(this);
        this.run = this.run.bind(this);
        this.feature = featurePath ? astParse.create(astLoad.fromPath(featurePath)) : undefined;

        console.dir(this.feature, { depth: null });
    }

    load(featureAsString) {
        this.feature = astParse.create(astLoad.fromString(featureAsString));
    }

    run() {

    }
}

module.exports = FeatureTest;
