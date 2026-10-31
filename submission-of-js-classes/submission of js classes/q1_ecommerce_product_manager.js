// Q1 – E-Commerce Product Manager (Classes + Objects)
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new Error("Discount must be between 0 and 100.");
        }
        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `${this.name} (${this.category}) — ₹${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Keyboard", 1500, "Electronics"),
    new Product(2, "Notebook", 120, "Stationery"),
    new Product(3, "Headphones", 2400, "Electronics"),
    new Product(4, "Water Bottle", 850, "Home")
];

products[0].applyDiscount(10);
console.log("All products:");
products.forEach((product) => console.log(product.getDetails()));

const expensiveProducts = products.filter((product) => product.price > 1000);
console.log("\\nProducts priced above ₹1,000:");
expensiveProducts.forEach((product) => console.log(product.getDetails()));

// Also show the filtered products in the page when opened in a browser.
const productContainer = document.getElementById("products");
if (productContainer) {
    productContainer.innerHTML = "";
    expensiveProducts.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product";
        card.textContent = product.getDetails();
        productContainer.appendChild(card);
    });
}