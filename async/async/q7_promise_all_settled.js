// Q7 - The Lazy Loader: Promise Combinator Practice

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error("Profile could not load"));
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error("Posts could not load"));
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error("Messages could not load"));
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    // allSettled waits until every Promise has either fulfilled or rejected.
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const moduleNames = ["Profile", "Posts", "Messages"];

    for (let i = 0; i < results.length; i++) {
        if (results[i].status === "fulfilled") {
            console.log(moduleNames[i] + " succeeded:", results[i].value);
        } else {
            console.log(moduleNames[i] + " failed:", results[i].reason.message);
        }
    }

    const endTime = Date.now();
    console.log("Total time taken:", ((endTime - startTime) / 1000).toFixed(2), "seconds");
}

loadDashboard();
