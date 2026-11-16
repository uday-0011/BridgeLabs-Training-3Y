// Q8: Implement a custom version of Array.prototype.map()

Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        // Match map() behaviour by skipping empty array slots.
        if (i in this) {
            result.push(callback(this[i], i, this));
        }
    }

    return result;
};

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(function (number) {
    return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6]

// Another example using an arrow callback:
console.log(numbers.myMap(number => number * number)); // [1, 4, 9]
