// Q5 - Frontend Rush: Avoiding Callback Hell

// PART 1: Nested callbacks (callback hell).
function designCallback(next) {
    setTimeout(() => {
        console.log("Design completed");
        next();
    }, 1000);
}

function buildCallback(next) {
    setTimeout(() => {
        console.log("Build completed");
        next();
    }, 1000);
}

function testCallback(next) {
    setTimeout(() => {
        console.log("Tests passed");
        next();
    }, 1000);
}

function deployCallback(next) {
    setTimeout(() => {
        console.log("Deployment completed");
        next();
    }, 1000);
}

function celebrateCallback() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

console.log("Callback version started");
designCallback(() => {
    buildCallback(() => {
        testCallback(() => {
            deployCallback(() => {
                celebrateCallback();
            });
        });
    });
});

// PART 2: Promise-based stages used by async/await.
function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function runPipelineWithAsyncAwait() {
    console.log("Async/await version started");
    await runStage("Design completed");
    await runStage("Build completed");
    await runStage("Tests passed");
    await runStage("Deployment completed");
    await runStage("Celebration time!");
}

// The callback and async/await demonstrations run independently.
// The async function pauses at each await until that stage's Promise settles.
runPipelineWithAsyncAwait();

// async/await improves readability because sequential asynchronous steps
// look like ordinary top-to-bottom code. It also makes try/catch error
// handling straightforward and avoids deeply nested callback functions.
