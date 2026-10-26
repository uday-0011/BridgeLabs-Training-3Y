"use strict";

// Q8. Strict Mode Showdown
// The original function:
// function demo(a, a) {
//     total = 10;
//     delete total;
// }
// demo(5, 10);
//
// In strict mode, duplicate parameter names are a SyntaxError.
// Also, assigning to undeclared total causes ReferenceError.
// delete total is illegal when total is an unqualified identifier.
//
// To demonstrate the differences safely, the observations are recorded below.
console.log("=== Strict Mode Observations ===");
console.log("Duplicate parameter names are illegal in strict-mode functions.");
console.log("Assigning to undeclared total throws ReferenceError.");
console.log("Deleting an unqualified identifier is illegal in strict mode.");

console.log("=== Non-Strict Mode Observations ===");
console.log("Duplicate parameter names are allowed in non-strict functions; the last value wins.");
console.log("Assigning to undeclared total can create a global property in sloppy mode.");
console.log("Deleting an identifier still does not behave like deleting an object property.");

// Correct ES6 version
function demoCorrect(first, second) {
    let total = 10;
    console.log(`First: ${first}, Second: ${second}, Total: ${total}`);
    return total;
}

demoCorrect(5, 10);
