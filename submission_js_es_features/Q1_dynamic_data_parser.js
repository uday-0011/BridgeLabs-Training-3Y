"use strict";

// Q1. Dynamic Data Parser
// Convert mixed API values to Number, Boolean, and String forms.
// Invalid numeric values are kept separately.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];
const report = [];

for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Number.isNaN() identifies values that became NaN.
    // Whitespace-only strings and "100px" are also invalid for this numeric report.
    const isWhitespaceString =
        typeof value === "string" && value.trim() === "";

    const isValidNumber =
        !Number.isNaN(numberValue) &&
        !isWhitespaceString &&
        !(typeof value === "string" && value === "100px") &&
        !(typeof value === "string" && value === "NaN");

    if (isValidNumber) {
        validNumbers.push(numberValue);
        report.push(
            `Value: ${stringValue} | Number: ${numberValue} | Boolean: ${booleanValue} | Status: VALID`
        );
    } else {
        invalidNumbers.push(value);
        report.push(
            `Value: ${stringValue} | Number: NaN/invalid | Boolean: ${booleanValue} | Status: INVALID`
        );
    }
}

console.log("=== Dynamic Data Parser Report ===");
for (const line of report) {
    console.log(line);
}

console.log("Valid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidNumbers.length);
