// Q3 – Transaction Validator
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null || transaction === undefined) {
            const error = new Error("Transaction entry is null");
            error.name = "NullTransactionError";
            throw error;
        }
        if (transaction.id === undefined || transaction.id === null ||
            transaction.amount === undefined || transaction.amount === null) {
            const error = new Error("Missing transaction id or amount");
            error.name = "MissingFieldError";
            throw error;
        }
        if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
            const error = new Error("Amount must be a finite number");
            error.name = "InvalidAmountError";
            throw error;
        }
        if (transaction.amount < 0) {
            const error = new Error("Transaction amount cannot be negative");
            error.name = "NegativeAmountError";
            throw error;
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);
    } catch (error) {
        invalid.push({
            index: i,
            type: error.name,
            message: error.message
        });
        console.log(`Transaction at index ${i} failed: ${error.name} — ${error.message}`);
    }
}

console.log("\n=== Final Transaction Report ===");
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);

// Debug tip: set a breakpoint on `const transaction = transactions[i]`.
// Watch `i`, `transaction`, `valid`, and `invalid`; step over each condition.
