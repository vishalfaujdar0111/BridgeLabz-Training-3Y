// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert to lowercase so that the checks are not case-sensitive.
const lowerCaseFeedback = feedback.toLowerCase();

// Split the feedback into words and count them.
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Check whether the feedback contains negative words.
const containsBad = lowerCaseFeedback.includes("bad");
const containsPoor = lowerCaseFeedback.includes("poor");

// Display the feedback analysis.
console.log("Customer Feedback:", feedback);
console.log("Word Count:", wordCount);

if (containsBad || containsPoor) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
