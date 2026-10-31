// Q6 – Employee Management System (Classes + Object Methods)
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) throw new Error("Bonus percent cannot be negative.");
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 45000),
    new Employee(2, "Sara", "HR", 38000),
    new Employee(3, "Kiran", "Finance", 52000),
    new Employee(4, "Meera", "IT", 60000),
    new Employee(5, "Ravi", "Sales", 41000)
];

console.log("Annual salary by employee (before bonus):");
employees.forEach((employee) => {
    console.log(`${employee.name} (${employee.department}): ₹${employee.getAnnualSalary().toFixed(2)}`);
});

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);
console.log(`Total annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);

employees[0].applyBonus(10);
console.log(`Amit's annual salary after 10% monthly salary bonus adjustment: ₹${employees[0].getAnnualSalary().toFixed(2)}`);