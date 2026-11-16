// Q1: Callback function demonstration

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback(); // Execute the callback after greeting
}

greetUser("Uday", showEndMessage);

// Output:
// Hello Uday
// Welcome to the course!
