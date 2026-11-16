// Q2: Pass different callback operations to one function

function applyOperation(numbers, operation) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }

    return result;
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, function (number) {
    return number * 2;
});

const squaredNumbers = applyOperation(numbers, function (number) {
    return number * number;
});

console.log("Doubled:", doubledNumbers); // [2, 4, 6, 8]
console.log("Squared:", squaredNumbers); // [1, 4, 9, 16]
