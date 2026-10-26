// Q2. String Manipulation Report

const productName = " wireless headphones PRO ";

// Trim spaces and convert to lowercase
const cleanedWords = productName.trim().toLowerCase().split(" ");

// Capitalize the first letter of every word
const capitalizedWords = cleanedWords.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
);

// Join the words and replace "Pro" with "Pro Edition"
const cleanedTitle = capitalizedWords.join(" ").replace("Pro", "Pro Edition");

console.log(`Cleaned Title: ${cleanedTitle}`);
console.log(`Length: ${cleanedTitle.length}`);
