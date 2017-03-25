# gherkin-easy

Use gherkin to drive JavaScript unit testing

## Install

    $ npm install gherkin-easy

## Getting Started

1. Create a gherkin feature file:

```gherkin

# ./withdraw-cash.feature

Feature: Withdraw Cash

    Scenario Outline: Withdraw cash from bank account
        Given my account balance is $<startingBalance>
        When I withdraw $<withdrawAmount> from my account
        Then my account should have a remaining balance of $<remainingBalance>

        Examples:
            | startingBalance | withdrawAmount | remainingBalance |
            | 100             | 50             | 50               |
            | 100             | 0              | 100              |
            | 100             | 1.25           | 98.75            |
            | 1               | 0.50           | 0.50             |
            | 1               | 5.00           | -4.00            |
            
```

2. Create feature code:

```javascript

// ./bank-account.js

class BankAccount {

    constructor(balance = 0) {
        this.balance = balance;
        this.withdraw = this.withdraw.bind(this);
    }

    withdraw(amt = 0) {
        this.balance = this.balance - amt;
        return amt;
    }

    getBalance() {
        return this.balance;
    }
}

module.exports = BankAccount;

```

3. Create test code:

```javascript

// ./__tests__/withdraw-cash-test.js

const FeatureTest = require('gherkin-easy');
const BankAccount = require('../bank-account');
const featureTest = new FeatureTest('../withdraw-cash.feature');

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

```
