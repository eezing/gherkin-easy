
const FeatureTest = require('../../src');
const BankAccount = require('../bank-account');
const featureTest = new FeatureTest('./examples/__features__/withdraw-cash.feature');

featureTest.run(({ given, when, then, example }) => {

    let account;

    beforeAll(() => {
        account = new BankAccount(example.startingBalance);
    });

    test(given, () => {
        expect(account.getBalance()).toBe(example.startingBalance);
    });

    test(when, () => {
        expect(account.withdraw(example.withdrawAmount)).toBe(example.withdrawAmount);
    });

    test(then, () => {
        expect(account.getBalance()).toBe(example.remainingBalance);
    });
});
