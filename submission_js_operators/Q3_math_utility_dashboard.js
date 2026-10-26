// Q3. Math Utility Dashboard

const x = 16.75;

const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const power = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Formatted result summary using a template literal
const summary = `
Math Utility Dashboard
----------------------
Original Value : ${x}
Rounded Value  : ${roundedValue}
Square Root    : ${squareRoot.toFixed(2)}
Power (x^3)    : ${power.toFixed(2)}
Random (10-50) : ${randomNumber}
`;

console.log(summary);
