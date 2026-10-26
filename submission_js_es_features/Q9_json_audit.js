"use strict";

// Q9. JSON Audit
// Parse JSON entries one by one.
// Invalid JSON and missing keys are reported with line numbers.

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    const rawEntry = rawData[index];

    try {
        const parsed = JSON.parse(rawEntry);

        if (!Object.prototype.hasOwnProperty.call(parsed, "user")) {
            throw new Error("Missing key: user");
        }

        if (!Object.prototype.hasOwnProperty.call(parsed, "age")) {
            throw new Error("Missing key: age");
        }

        const age = Number(parsed.age);

        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number");
        }

        const cleanEntry = {
            user: parsed.user,
            age
        };

        cleanData.push(cleanEntry);

        if (age < 18) {
            under18Users.push(cleanEntry);
        }

        console.log(`Line ${lineNumber}: VALID`);
    } catch (error) {
        errors.push({
            line: lineNumber,
            message: error.message
        });

        console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
    }
}

console.log("=== JSON Audit Report ===");
console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Under-18 users:", under18Users);
console.log(`Valid entries: ${cleanData.length}`);
console.log(`Invalid entries: ${errors.length}`);

// Debug observation:
// Put a breakpoint inside the try block and step into JSON.parse().
// When an error occurs, execution jumps directly to catch.
// The lineNumber variable identifies the source entry.
