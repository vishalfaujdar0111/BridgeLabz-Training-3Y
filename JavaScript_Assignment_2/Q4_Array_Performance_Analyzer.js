// Q4. Array Performance Analyzer

// Generate an array containing 8 random integer scores from 30 to 100.
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Find the highest and lowest scores.
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Calculate the average using reduce().
const totalScore = scores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / scores.length;

// Use filter() to find students who passed (score >= 50).
const passedScores = scores.filter(score => score >= 50);
const passedCount = passedScores.length;

// Use map() to create a numbered list of scores.
const numberedScores = scores.map(
    (score, index) => `Student ${index + 1}: ${score}`
);

// Display the complete summary.
console.log("Array Performance Analyzer");
console.log("--------------------------");
console.log("Scores:", scores);
console.log(numberedScores.join("\n"));
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Students Passed:", passedCount);
console.log("Students Failed:", scores.length - passedCount);
