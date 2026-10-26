"use strict";

// Q10. Nested Hoisting and Closures

function outer() {
    // "count" is hoisted inside outer() and initialized as undefined.
    console.log("Outer count before assignment:", count);

    var count = 5;

    function inner() {
        // This count is a separate local variable.
        // Its declaration is hoisted inside inner(), so it starts undefined.
        console.log("Inner count before assignment:", count);

        var count = 10;

        console.log("Inner count after assignment:", count);
    }

    inner();

    console.log("Outer count after inner():", count);
}

outer();

console.log("=== Hoisting Explanation ===");
console.log("outer() has its own execution context and count variable.");
console.log("inner() has a separate execution context and its own count variable.");
console.log("The inner count shadows the outer count.");

console.log("=== Arrow Function Comparison ===");

function outerWithArrow() {
    var count = 5;

    const innerArrow = () => {
        // Arrow functions do not create their own 'this', arguments, or scope
        // for lexical variables. However, a local var declaration still
        // belongs to the arrow function's own function scope.
        var count = 10;
        console.log("Arrow inner count:", count);
    };

    innerArrow();
    console.log("Arrow outer count:", count);
}

outerWithArrow();

// Debug observation:
// Put breakpoints in outer(), inner(), and innerArrow().
// Call stack while inner() runs:
// inner -> outer -> global
//
// While innerArrow() runs:
// innerArrow -> outerWithArrow -> global
