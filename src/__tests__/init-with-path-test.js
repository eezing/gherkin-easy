
const FeatureTest = require('../index');

describe('FeatureTest Init with path to feature file', () => {

    let featurePath;
    let featureTest;

    beforeAll(() => {
        featurePath = './src/__tests_assets__/dummy-feature.feature';
        featureTest = new FeatureTest(featurePath);
    });

    test('Instance should have property feature.name equal to "Dummy Feature"', () => {
        expect(featureTest.feature.name).toBe('Dummy Feature');
    });
});
