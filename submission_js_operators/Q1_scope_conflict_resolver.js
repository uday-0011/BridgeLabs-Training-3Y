// Q1. Scope Conflict Resolver

// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only for permanent employees
    let totalSalary = salary;

    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent: ${isPermanent}`);
    console.log(`Total Salary: ₹${totalSalary}`);
}

// Test both outcomes
calculateSalary(true);
calculateSalary(false);

// Changing the local parameter does not change the global bonus variable.
console.log(`Global bonus remains: ₹${bonus}`);
