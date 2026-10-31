// Q10 – Nested Hoisting and Closures
"use strict";

function outer() {
    console.log(count); // undefined: outer's `var count` is hoisted within outer().
    var count = 5;

    function inner() {
        console.log(count); // undefined: inner has its own hoisted `var count`.
        var count = 10;
    }

    inner();
}
outer();

// Expected output:
// undefined
// undefined
//
// `inner`'s local `var count` shadows outer's `count`. Its declaration is hoisted
// in the inner function's own execution context, so the first inner log sees
// undefined rather than outer's value 5.

function outerWithArrow() {
    console.log(count); // undefined, same outer var hoisting rule.
    var count = 5;

    const inner = () => {
        // No local `count` is declared here, so the arrow reads outer's count.
        console.log(count); // 5
    };

    inner();
}
outerWithArrow();

// Call-stack debugging guide:
// 1. Break at `function outer()` and step into outer.
// 2. Watch `count`; before assignment it is undefined, then it becomes 5.
// 3. Step into inner: its local `count` is undefined before `count = 10`.
// 4. Step out to return to outer. The arrow version has no local count, so it
//    uses the surrounding lexical scope and prints 5.
