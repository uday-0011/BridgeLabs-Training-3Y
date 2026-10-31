// Q6 – Pyramid Pattern Generator
"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter pyramid height (press Enter for default 5): ", (answer) => {
    const parsedHeight = answer.trim() === "" ? 5 : Number(answer);
    const height = Number.isInteger(parsedHeight) && parsedHeight > 0
        ? parsedHeight
        : 5;

    console.log(`\nPyramid height: ${height}`);
    for (let row = 1; row <= height; row++) {
        let line = "";
        for (let column = 1; column <= row; column++) {
            line += "* ";
        }
        console.log(line.trimEnd());
    }

    rl.close();
});

// To experiment with `var`, replace `let row`, `let column`, and `let line`
// with `var`. `var` is function-scoped, not block-scoped, so a loop variable
// can still be accessed after the loop (if declared in the surrounding function).
// `let` is block-scoped. In this example each loop works either way, but scope
// and variable reuse become important in callbacks/closures.
// "use strict" catches assignments to undeclared names, e.g. `colum = 1`.
