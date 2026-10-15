// Q8. Employee Salary Projection
let currentSalary = 40000;
const annualIncrementRate = 8; // percentage
const projection = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * annualIncrementRate / 100;
    currentSalary = Math.round(currentSalary);

    projection.push({
        Year: year,
        "Projected Salary (₹)": currentSalary
    });
}

console.table(projection);
