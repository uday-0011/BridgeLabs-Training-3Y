// Q1 - The Startup Morning: Async Coffee Maker
// Each step returns a Promise and takes 1-2 seconds.
// A random failure is simulated so the catch() block can be tested.

function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Could not boil the water."));
            } else {
                console.log("Water boiled.");
                resolve();
            }
        }, delay);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Coffee brewing failed."));
            } else {
                console.log("Coffee brewed.");
                resolve();
            }
        }, delay);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Could not pour the coffee."));
            } else {
                console.log("Coffee poured into the cup.");
                resolve();
            }
        }, delay);
    });
}

// .then() starts the next step only after the previous Promise resolves.
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.error("Coffee process failed:", error.message));
