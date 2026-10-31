// Q5 – Hoisting Lab: The Sequence Trap
"use strict";

// Original sequence, with the expected output explained:
// console.log(score); // undefined: `var score` is hoisted and initialized to undefined.
// announce();         // "Game started": function declarations are hoisted with their body.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();        // "ready": status has been initialized before this call.
// function startGame() { console.log(status); }

// Fixed, clear version:
const score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}
function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow-function comparison:
// Arrow functions are assigned to variables, so the variable's declaration rules apply.
// Calling `announceArrow()` before its initialization would fail with const/let.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);

announceArrow();
startGameArrow();

// `var` is initialized to undefined during setup; `let`/`const` remain in the
// temporal dead zone until their declaration executes. Function declarations can
// be called before their textual location.
