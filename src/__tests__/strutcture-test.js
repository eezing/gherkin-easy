'use strict';

const FeatureTest = require('../index');

let featurePath;
let featureTest;

beforeAll(() => {
    featurePath = './src/__tests_assets__/structure-gherkin.feature';
    featureTest = new FeatureTest(featurePath);
});

test('Expect feature.name to be as expected', () => {
    expect(featureTest.feature.name).toBe('Dummy Feature');
});

test('Structure - Expect feature.outlines to be as expected', () => {
    expect(featureTest.feature.outlines).toEqual([
        {
            name: 'Dummy Scenario Outline',
            examples: [
                {
                    given: 'Given a is 1 And b is 2',
                    when: 'When I take 1 And I add 2',
                    then: 'Then I should have 3 And a is still 1 And b is still 2',
                    example: { a: 1, b: 2, c: 3 }
                }
            ]
        }
    ]);
});
