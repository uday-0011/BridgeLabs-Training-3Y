// Q7: Closure - the returned function remembers multiplier

function makeMultiplier(multiplier) {
    // The inner function can still access multiplier after
    // makeMultiplier has finished running.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure: the inner function remembers the variable
// `multiplier` from its outer function's lexical scope.
