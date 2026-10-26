"use strict";

// Q6. Pyramid Pattern Generator
// User input can be supplied by changing userLimit.
// Default limit = 5.

const userLimit = 5;
const limit = Number.isInteger(userLimit) && userLimit > 0 ? userLimit : 5;

console.log("=== Pyramid using let ===");

for (let row = 1; row <= limit; row++) {
    let pattern = "";

    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

console.log("=== Pyramid using var ===");

// var is function-scoped rather than block-scoped.
// Each iteration still creates the pattern assignment in the same
// function/global scope, so the value is reset at the beginning of each row.
for (var rowVar = 1; rowVar <= limit; rowVar++) {
    var patternVar = "";

    for (var columnVar = 1; columnVar <= rowVar; columnVar++) {
        patternVar += "* ";
    }

    console.log(patternVar.trim());
}

// Debug observation:
// Add a breakpoint inside the inner loop and watch row, column,
// pattern, rowVar, columnVar, and patternVar.
// With var, loop variables are function-scoped and reused.
console.log("Debug observation: var variables are function-scoped and reused.");
console.log("Strict mode catches undeclared loop variables such as: i = 0;");
