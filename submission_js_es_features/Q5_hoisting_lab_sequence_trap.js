"use strict";

// Q5. Hoisting Lab: The Sequence Trap

console.log("=== Original Hoisting Behavior ===");

// var is hoisted and initialized with undefined.
console.log(score); // undefined
announce();          // Function declarations are hoisted.
var score = 50;

function announce() {
    console.log("Game started");
}

// let is hoisted to the temporal dead zone (TDZ).
// It is declared before startGame() is called, so this works here.
let status = "ready";

function startGame() {
    console.log(status);
}

startGame();

console.log("=== Memory State Explanation ===");
console.log("var score: hoisted, initialized as undefined before assignment.");
console.log("function announce: declaration is hoisted and callable before its source line.");
console.log("let status: hoisted but in TDZ until its declaration executes.");

// Fixed version: declarations and assignments are placed before use.
console.log("=== Fixed Version ===");

const fixedScore = 50;
const fixedStatus = "ready";

function fixedAnnounce() {
    console.log("Game started");
}

function fixedStartGame() {
    console.log(fixedStatus);
}

console.log(fixedScore);
fixedAnnounce();
fixedStartGame();

// Arrow-function comparison:
// Arrow functions assigned to const are not callable before initialization.
const arrowAnnounce = () => console.log("Arrow game started");
const arrowStartGame = () => console.log(fixedStatus);

arrowAnnounce();
arrowStartGame();

console.log(
    "Arrow functions follow const/let initialization rules and are not hoisted like function declarations."
);
