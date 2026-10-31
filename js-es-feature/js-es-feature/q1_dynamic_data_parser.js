// Q1 – Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

console.log("=== Dynamic Data Parser Report ===");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Blank strings, null, and undefined are treated as invalid input for this API
    // even though Number(" ") and Number(null) both produce 0 in JavaScript.
    const isBlankString = typeof value === "string" && value.trim() === "";
    const isValid = value !== null &&
                    value !== undefined &&
                    !isBlankString &&
                    Number.isFinite(numberValue);

    console.log(`Item ${i + 1}:`);
    console.log(`  Original: ${stringValue}`);
    console.log(`  Number: ${numberValue}`);
    console.log(`  Boolean: ${booleanValue}`);
    console.log(`  String: "${stringValue}"`);

    if (isValid) {
        validNumbers.push(numberValue);
        console.log("  Status: VALID numeric value");
    } else {
        invalidNumbers.push({ index: i, original: value, number: numberValue });
        console.log("  Status: INVALID numeric value");
    }
}

console.log("\nValid numbers:", validNumbers);
console.log("Invalid entries:", invalidNumbers);
console.log(`Summary: ${validNumbers.length} valid, ${invalidNumbers.length} invalid.`);
