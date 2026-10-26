// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Split the feedback into words and count them
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Check for negative keywords
const hasNegativeFeedback =
    feedback.toLowerCase().includes("bad") ||
    feedback.toLowerCase().includes("poor");

// Print the result
console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${wordCount}`);

if (!hasNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
