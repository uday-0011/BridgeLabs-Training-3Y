// Q3: Arrow functions do not have their own `this`

const user = {
    name: "Uday",

    // An arrow function gets `this` from its surrounding scope.
    showName: () => {
        console.log("Arrow function name:", this.name);
    }
};

user.showName(); // In a typical Node.js file, this.name is undefined.

// Fix: use a normal method/function so `this` refers to the user object.
user.showName = function () {
    console.log("Normal function name:", this.name);
};

user.showName(); // Normal function name: Uday
