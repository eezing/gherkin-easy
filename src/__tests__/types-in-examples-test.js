
const FeatureTest = require('../index');
const featureTest = new FeatureTest('./src/__tests_assets__/types-in-examples.feature');

featureTest.run(({ given, when, then, example }) => {

    test(given, () => undefined);

    test(when, () => undefined);

    test(then, () => {
        if (example.varType === 'array') {
            expect(Array.isArray(example.variable)).toBe(true);
        } else {
            expect(typeof example.variable).toBe(example.varType);
        }
    });
});
