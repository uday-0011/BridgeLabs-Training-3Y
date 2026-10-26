// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate subtotal using reduce()
const subtotal = cart.reduce((total, product) => total + product.price, 0);

let discountedTotal = cart.reduce((total, product) => {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountedPrice = product.price * (1 - discountRate);
    return total + discountedPrice;
}, 0);

// Apply extra 5% discount when original cart value is greater than 50000
if (subtotal > 50000) {
    discountedTotal *= 0.95;
}

console.log(`Subtotal: ₹${subtotal.toFixed(2)}`);
console.log(`Final Total: ₹${discountedTotal.toFixed(2)}`);
console.log(`Total Savings: ₹${(subtotal - discountedTotal).toFixed(2)}`);
