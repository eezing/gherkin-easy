'use strict';

const fs = require('fs');
const FeatureTest = require('../index');

describe('Feature: Load gherkin file', () => {

    describe('Scenario: I instantiate FeatureTest with the gherkin file path as argument', () => {

        let featurePath;
        let featureTest;

        beforeAll(() => {
            featurePath = './src/__tests_assets__/dummy-gherkin.feature';
        });

        test('Given the feature file exists', () => {
            const featureAsString = fs.readFileSync(featurePath, 'utf-8');
            expect(typeof(featureAsString)).toBe('string');
        });

        test('When I instantiate the class with the file path as argument', () => {
            featureTest = new FeatureTest(featurePath);
        });

        test('Then I should have an instance with the expected gherkin feature', () => {
            expect(featureTest.feature.name).toBe('Dummy Feature');
        });
    });
});
