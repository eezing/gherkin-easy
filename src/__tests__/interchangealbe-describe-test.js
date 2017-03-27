'use strict';

const FeatureTest = require('../index');

describe('Feature: Interchangeable describe', () => {

    describe('Scenario: I want use a custom describe in my tests', () => {

        let describeDidRun;
        let testDidRun;
        let describeFunction;
        let featureTest;

        beforeAll(() => {
            featureTest = new FeatureTest('./src/__tests_assets__/dummy-gherkin.feature');
        });

        test('Given a valid describe function', () => {
            describeFunction = ((msg, callback) => {
                describeDidRun = true;
                callback();
            });
        });

        test('When set FeatureTest.describe instance to describeFunction', () => {
            featureTest.describe = describeFunction;
        });

        test('Then the describe should get called when the test is run', () => {
            featureTest.run(() => testDidRun = true);
            expect(describeDidRun).toBe(true);
            expect(testDidRun).toBe(true);
        });
    });
});
