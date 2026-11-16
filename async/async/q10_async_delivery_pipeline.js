// Q10 - The Final Delivery: Async Pipeline Debugger

// Each delivery step returns a Promise.
// It takes a random 1-2 seconds and has a 20% chance of failure.
function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(stepName + " failed"));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

function takeOrder() {
    return deliveryStep("takeOrder", "Step 1: Order taken");
}

function prepare() {
    return deliveryStep("prepare", "Step 2: Food prepared");
}

function pack() {
    return deliveryStep("pack", "Step 3: Package ready");
}

function dispatch() {
    return deliveryStep("dispatch", "Step 4: Out for delivery");
}

function deliver() {
    return deliveryStep("deliver", "Delivery completed!");
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // Each await pauses this async function until the current step settles.
        // Therefore, the next step starts only after the previous one succeeds.
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
    } catch (error) {
        // A rejected Promise throws at its await expression and control moves here.
        console.error("Pipeline failed!", error.message);
    }
}

// Calling an async function starts it. It returns a Promise to its caller.
// The event loop can continue handling other work while each timer is waiting.
runPipeline();
