// Q2. String Manipulation Report

// Original product name contains extra spaces and mixed letter cases.
const productName = " wireless headphones PRO ";

// Remove extra spaces from the beginning and end.
const trimmedName = productName.trim();

// Convert the complete string to lowercase, split it into words,
// capitalize the first letter of each word, and join the words.
const titleCaseName = trimmedName
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition".
const cleanedTitle = titleCaseName.replace("Pro", "Pro Edition");

// Display the cleaned title and its number of characters.
console.log("Cleaned Product Title:", cleanedTitle);
console.log("Title Length:", cleanedTitle.length);
