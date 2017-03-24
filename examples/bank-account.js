
'use strict';

class BankAccount {

    constructor(balance = 0) {
        this.balance = balance;
        this.withdraw = this.withdraw.bind(this);
    }

    withdraw(amt) {
        this.balance = this.balance - amt;
        return amt;
    }

    getBalance() {
        return this.balance;
    }
}

module.exports = BankAccount;
