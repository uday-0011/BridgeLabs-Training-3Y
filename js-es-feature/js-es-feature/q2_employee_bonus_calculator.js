// Q2 – Employee Bonus Calculator
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Report ===");

for (let i = 0; i < employees.length; i++) {
    try {
        const employee = employees[i];

        if (!employee || !("name" in employee) ||
            !("salary" in employee) || !("years" in employee)) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Salary or years could not be converted to a number");
        }

        const rate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * rate;

        console.log(`${employee.name}: Salary = ₹${salary.toFixed(2)}, ` +
                    `Experience = ${years} years, Bonus rate = ${rate * 100}%, ` +
                    `Bonus = ₹${bonus.toFixed(2)}`);
    } catch (error) {
        console.log(`Employee at index ${i} failed: ${error.message}`);
    }
}

// "use strict" prevents accidental assignment to undeclared variables.
// Use const/let for every variable instead of creating implicit globals.
