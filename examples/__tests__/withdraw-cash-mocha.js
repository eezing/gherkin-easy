'use strict';

const { expect } = require('chai');
const FeatureTest = require('../../src');
const BankAccount = require('../bank-account');
const featureTest = new FeatureTest('./examples/__features__/withdraw-cash.feature');

featureTest.run(({ given, when, then, example }) => {

    let account;

    before(() => {
        account = new BankAccount(example.startingBalance);
    });

    it(given, () => {
        expect(account.getBalance()).to.equal(example.startingBalance);
    });

    it(when, () => {
        expect(account.withdraw(example.withdrawAmount)).to.equal(example.withdrawAmount);
    });

    it(then, () => {
        expect(account.getBalance()).to.equal(example.remainingBalance);
    });
});
