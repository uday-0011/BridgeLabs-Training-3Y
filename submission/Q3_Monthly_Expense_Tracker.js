// Q3. Monthly Expense Tracker
const expenses = {
    food: 4500,
    travel: 1200,
    rent: 8000,
    bills: 1500,
    leisure: 1000
};

let total = 0;

// Add each category to the total using the assignment operator.
for (const category in expenses) {
    total += expenses[category];
}

const average = total / Object.keys(expenses).length;
const tax = total * 0.10;
const finalAmount = total + tax;

console.log(`Total expenses: ₹${total.toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`10% tax: ₹${tax.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
