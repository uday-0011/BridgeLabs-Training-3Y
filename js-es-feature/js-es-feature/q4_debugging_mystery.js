// Q4 – Debugging Mystery
"use strict";

// Broken version:
// function showMessage() {
//     greeting = "Welcome"; // ReferenceError in strict mode: greeting is undeclared.
//     console.log(greeting);
// }
// showMessage();

function showMessage() {
    const greeting = "Welcome"; // Declared in this function's local scope.
    console.log(greeting);
}
showMessage();

// Scope explanation:
// `const greeting` creates a local binding inside showMessage.
// In strict mode, assigning to an undeclared identifier is not allowed.
// Debug in VS Code: set a breakpoint at the const line; add `greeting` to Watch.
// Check the Call Stack: showMessage -> program entry point.
