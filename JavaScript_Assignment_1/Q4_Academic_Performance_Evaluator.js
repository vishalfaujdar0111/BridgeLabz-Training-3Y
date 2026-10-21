// Q4: Academic Performance Evaluator
// A mark below 35 in any subject means the student is detained.

const marks = [88, 91, 84, 79, 90]; // Replace these test marks as needed.
const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailedSubject = marks.some(mark => mark < 35);

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

if (hasFailedSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}
