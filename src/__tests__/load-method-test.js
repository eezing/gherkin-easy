
const fs = require('fs');
const FeatureTest = require('../index');
const featureAsString = fs.readFileSync('./src/__tests_assets__/dummy-feature.feature', 'utf-8');

describe('FeatureTest.load with string', () => {

    let featureTest;

    beforeAll(() => {
        featureTest = new FeatureTest();
        featureTest.load(featureAsString);
    });

    test('Instance should have property feature.name equal to "Dummy Feature"', () => {
        expect(featureTest.feature.name).toBe('Dummy Feature');
    });
});
