// Q4 - DevOps Delay: Async Timeout Race

// Each server resolves after its own delay, but can randomly fail.
function contactServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(serverName + " failed to respond."));
            } else {
                resolve(serverName + " deployment finished");
            }
        }, delay);
    });
}

// Promise.all() waits for every Promise to fulfill.
// If any Promise rejects, Promise.all() rejects.
Promise.all([
    contactServer("Server A", 2000),
    contactServer("Server B", 3000)
])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.error("Deployment error:", error.message);
    });

// Promise.race() settles as soon as the first Promise settles.
// Since Server A has a shorter delay, it is normally the first responder,
// unless it fails first.
Promise.race([
    contactServer("Server A", 2000),
    contactServer("Server B", 3000)
])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.error("Fastest response failed:", error.message);
    });
