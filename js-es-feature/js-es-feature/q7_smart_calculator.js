// Q7 – Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Unknown operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "divide":
            if (b === 0) {
                const error = new Error("Cannot divide by zero.");
                error.name = "DivisionByZeroError";
                throw error;
            }
            return a / b;
        case "power":
            return a ** b;
        case "root":
            if (a < 0) {
                const error = new Error("Cannot calculate a real square root of a negative number.");
                error.name = "NegativeRootError";
                throw error;
            }
            return Math.sqrt(a);
        case "subtract":
            return a - b;
        default:
            throw new InvalidOperationError(operation);
    }
}

console.log("=== Smart Calculator Summary ===");
for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}(${num1}, ${num2}) = ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} — ${error.message}`);
    }
}

// Example unknown-operation check:
try {
    calculate("modulo", num1, num2);
} catch (error) {
    console.log(`Extra test: ${error.name} — ${error.message}`);
}
