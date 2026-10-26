"use strict";

// Q7. Smart Calculator

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;

        case "divide":
            if (secondNumber === 0) {
                throw new CalculationError("Cannot divide by zero.");
            }
            return firstNumber / secondNumber;

        case "power":
            return Math.pow(firstNumber, secondNumber);

        case "root":
            if (firstNumber < 0) {
                throw new CalculationError("Cannot calculate the root of a negative number.");
            }
            return Math.sqrt(firstNumber);

        case "subtract":
            return firstNumber - secondNumber;

        default:
            throw new InvalidOperationError(`Unknown operation: ${operation}`);
    }
}

console.log("=== Smart Calculator Summary ===");

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ERROR - ${error.name}: ${error.message}`);
    }
}

// Additional custom-error tests
try {
    calculate("divide", 25, 0);
} catch (error) {
    console.log(`Divide test: ${error.message}`);
}

try {
    calculate("root", -25, 0);
} catch (error) {
    console.log(`Root test: ${error.message}`);
}

try {
    calculate("multiply", 25, 2);
} catch (error) {
    console.log(`Invalid operation test: ${error.name}: ${error.message}`);
}
