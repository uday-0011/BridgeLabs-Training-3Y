"use strict";

// Q4. Debugging Mystery
// Original code:
// function showMessage() {
//     greeting = "Welcome";
//     console.log(greeting);
// }
// showMessage();
//
// Under strict mode, assigning to undeclared "greeting" throws:
// ReferenceError: greeting is not defined.
//
// Fix: explicitly declare the variable.

function showMessage() {
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

// Watch variable for debugger practice.
let watchVariable = "Watching greeting scope";
console.log("Watch variable:", watchVariable);

// Debug observation:
// Add a breakpoint on console.log(greeting) in VS Code.
// The Call Stack shows: showMessage -> global execution context.
// Scope shows greeting as a local variable.
