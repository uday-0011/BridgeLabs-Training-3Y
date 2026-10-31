// Q9 – JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const adults = [];

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        const parsed = JSON.parse(rawData[i]);

        if (parsed.user === undefined || parsed.age === undefined) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number");
        }

        const record = { ...parsed, age };
        clean.push(record);

        if (age >= 18) {
            adults.push(record);
        }
        console.log(`Line ${lineNumber}: valid JSON and required keys present.`);
    } catch (error) {
        errors.push({ line: lineNumber, message: error.message });
        console.log(`Line ${lineNumber}: ERROR — ${error.message}`);
    }
}

console.log("\n=== JSON Audit Report ===");
console.log("Clean entries:", clean);
console.log("Errors:", errors);
console.log("Clean entry count:", clean.length);
console.log("Error count:", errors.length);
console.log("Users under 18:", clean.filter((user) => user.age < 18));
console.log("Users aged 18 or older:", adults);

// Debug tip: breakpoint inside the loop; watch lineNumber, rawData[i], parsed,
// clean, and errors. Step into JSON.parse to inspect the flow if your debugger allows it.
