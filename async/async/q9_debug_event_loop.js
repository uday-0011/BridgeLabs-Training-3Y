// Q9 - Debugging the Event Loop

// Predicted output order:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// 1. Synchronous statements run first, in source order.
// 2. The Promise .then() callback enters the microtask queue.
// 3. setTimeout(..., 0) schedules a macrotask; zero milliseconds does not
//    mean it runs immediately.
// 4. After the current script finishes, JavaScript drains the microtask
//    queue before processing the next macrotask.
