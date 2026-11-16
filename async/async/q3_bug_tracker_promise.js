// Q3 - Bug Tracker: Callback to Promise Migration

// Promise-based replacement for the old callback-style fetchBugs().
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject(new Error("Bug tracking API request failed."));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Current bugs:");
        // console.table() displays array items in a readable table.
        console.table(bugs.map((bug, index) => ({
            Number: index + 1,
            Bug: bug
        })));
    })
    .catch((error) => {
        console.error("Could not fetch bugs:", error.message);
    });
