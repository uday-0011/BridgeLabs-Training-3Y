// Q2 - Task Scheduler: Micro vs Macro Challenge

console.log("Start");

// setTimeout callbacks are macrotasks (tasks).
setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

// Promise .then() callbacks are microtasks.
Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// JavaScript completes the current synchronous script first.
// It then empties the microtask queue (including Promise callbacks)
// before taking the next macrotask (the setTimeout callback).
