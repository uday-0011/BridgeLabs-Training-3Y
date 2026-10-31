// Q9 – Shopping Cart Total (Classes + RegExp for Coupon)
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (!name || !Number.isFinite(price) || price < 0 ||
            !Number.isInteger(quantity) || quantity < 1) {
            throw new Error("Provide a name, non-negative price, and positive whole-number quantity.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        // Accept SAVE20, DISC10, etc. Prefix identifies the coupon; digits are the percent.
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code);
        if (!match) {
            throw new Error("Invalid coupon. Use a format such as SAVE20 or DISC10.");
        }

        const discountPercent = Number(match[2]);
        if (discountPercent < 1 || discountPercent > 100) {
            throw new Error("Coupon discount must be between 1 and 100 percent.");
        }

        return this.getTotal() * (1 - discountPercent / 100);
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Notebook", 100, 3);
cart.addItem("Headphones", 2200, 1);

const subtotal = cart.getTotal();
const couponCode = "SAVE20";

console.log("=== Shopping Cart ===");
cart.items.forEach((item) => {
    console.log(`${item.name}: ₹${item.price.toFixed(2)} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`);
});
console.log(`Subtotal: ₹${subtotal.toFixed(2)}`);

try {
    const finalTotal = cart.applyCoupon(couponCode);
    console.log(`Coupon: ${couponCode}`);
    console.log(`Final total after discount: ₹${finalTotal.toFixed(2)}`);
} catch (error) {
    console.log(`Coupon error: ${error.message}`);
}