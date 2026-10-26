// Q6. Event-Based Counter Simulation

let count = 0;

// Increases the counter
function increment() {
    count++;
    console.log(`Count after increment: ${count}`);
}

// Decreases the counter
function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// Nested function demonstrates access to the outer function's count
function counterScopeDemo() {
    function updateCounter(change) {
        count += change;
        console.log(`Nested function count: ${count}`);
    }

    updateCounter(5);
    updateCounter(-2);
}

// Simulate click events manually
increment();
increment();
decrement();

// Demonstrate nested function scope
counterScopeDemo();
