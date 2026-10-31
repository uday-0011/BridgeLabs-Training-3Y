// Q8 – Strict Mode Showdown
"use strict";

// The original function is a SyntaxError in strict mode because duplicate
// parameter names are forbidden. An undeclared `total` assignment and deleting
// a variable identifier are also forbidden in strict mode.
//
// Demonstrate sloppy-mode behavior in a separately constructed function.
// `Function` bodies are non-strict unless their source includes "use strict".
const sloppyDemo = Function("a", "a", `
    total = 10; // Creates/sets a global in a classic sloppy script.
    console.log("Sloppy mode: a =", a, ", total =", total);
    // ` + "/* delete total; */" + `
    return total;
`);
try {
    console.log("Sloppy return:", sloppyDemo(5, 10));
    console.log("Note: sloppy assignment may create a global named total.");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// Ask the JavaScript engine to compile the equivalent strict function.
// Compilation fails because strict functions cannot have duplicate parameters.
try {
    Function('"use strict"; return function demo(a, a) { total = 10; };');
} catch (error) {
    console.log(`Strict duplicate-parameter test: ${error.name} — ${error.message}`);
}

// Correct ES6 version: unique parameters, declared local variable, no deleting
// a variable binding. `delete` is for object properties, not local variables.
function correctDemo(first, second) {
    const total = first + second;
    console.log(`Correct version: ${first} + ${second} = ${total}`);
}
correctDemo(5, 10);

// For a direct comparison, run a separate classic-script file without "use strict"
// for the sloppy example. Node.js modules and some environments may behave differently.
