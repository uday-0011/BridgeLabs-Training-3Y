# Assignment 6 - Async JavaScript

This folder contains 10 separate JavaScript files, one for each question.

## Run the programs

1. Install Node.js (Node.js 18 or newer is recommended).
2. Open this folder in VS Code.
3. Open the terminal in this folder.
4. Run one file at a time, for example:

```bash
node q1_async_coffee_maker.js
node q2_micro_vs_macro_tasks.js
```

Repeat with the filename for the question you want to test.

## Notes

- Several questions intentionally use `Math.random()`, so success/failure output can change on each run. Run them again to see different outcomes.
- Q5 intentionally demonstrates both nested callbacks and async/await. Both demonstrations run, so their logs may interleave.
- Q6 uses the Fake Store API and requires an internet connection. It uses the built-in `fetch()` available in Node.js 18+.
- Q2 and Q9 demonstrate the event loop: synchronous code runs first, then queued microtasks (Promise callbacks), then macrotasks (such as `setTimeout` callbacks).
- Q4 runs separate server calls for `Promise.all()` and `Promise.race()`, so their simulated random outcomes are independent.
