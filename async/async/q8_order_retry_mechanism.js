// Q8 - Order Processing Flow: Async Retry Mechanism

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 50% chance of failure.
            if (Math.random() < 0.5) {
                reject(new Error("Order submission failed"));
            } else {
                resolve("Order submitted successfully");
            }
        }, 500);
    });
}

async function processOrder() {
    // Try at most three times. await pauses this function until each attempt settles.
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log("Attempt " + attempt + ": Success");
            console.log(result);
            return;
        } catch (error) {
            console.log("Attempt " + attempt + ": Failed");
        }
    }

    // Reached only when all three attempts fail.
    throw new Error("Order could not be processed");
}

processOrder().catch((error) => {
    console.error("Final result:", error.message);
});
