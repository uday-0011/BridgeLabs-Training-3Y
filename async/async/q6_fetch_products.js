// Q6 - E-Commerce Dashboard: Product Card Fetcher
// Requires Node.js 18+ (which provides the global fetch function).
// Run: node q6_fetch_products.js

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        // fetch() does not reject for HTTP errors such as 404, so check ok.
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const products = await response.json();

        for (let i = 0; i < products.length; i++) {
            console.log("Product:", products[i].title);
            console.log("Price: $" + products[i].price);
            console.log("Image:", products[i].image);
            console.log("------------------------------");
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error.message);
    }
}

fetchProducts();
