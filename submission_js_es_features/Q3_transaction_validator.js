"use strict";

// Q3. Transaction Validator
// Custom errors categorize null entries, missing fields, and negative amounts.
// Debug observation: place a breakpoint on the "try" line to watch each transaction.

class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

class MissingTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingTransactionError";
    }
}

class NullTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullTransactionError";
    }
}

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new NullTransactionError("Transaction entry is null");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new MissingTransactionError("Transaction id or amount is missing");
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError("Transaction amount is negative");
        }

        validTransactions.push(transaction);
        console.log(`VALID: Transaction ${transaction.id}`);
    } catch (error) {
        invalidTransactions.push({
            transaction,
            errorType: error.name,
            message: error.message
        });
        console.log(`INVALID: ${error.name} - ${error.message}`);
    }
}

console.log("=== Transaction Report ===");
console.log(`Successful transactions: ${validTransactions.length}`);
console.log(`Failed transactions: ${invalidTransactions.length}`);
console.log("Valid:", validTransactions);
console.log("Invalid:", invalidTransactions);

// Debug observation:
// In VS Code, add a breakpoint inside the loop and inspect
// transaction, validTransactions, invalidTransactions, and error.
// Watch the call stack while execution enters the catch block.
