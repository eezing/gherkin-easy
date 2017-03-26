
const fs = require('fs');
const FeatureTest = require('../index');
const featureAsString = fs.readFileSync('./src/__tests_assets__/dummy-gherkin.feature', 'utf-8');

describe('Feature: Load gherkin string', () => {

    describe('Scenario: I load the feature into FeatureTest instance with the gherkin string as the argument', () => {

        let featureTest;

        beforeAll(() => {
            featureTest = new FeatureTest();
        });

        test('Given the feature string', () => {
            expect(typeof(featureAsString)).toBe('string');
        });

        test('When I execute the load method with a gherkin string as the argument', () => {
            featureTest.load(featureAsString);
        });

        test('Then the instance should have the expected gherkin feature', () => {
            expect(featureTest.feature.name).toBe('Dummy Feature');
        });
    });
});
