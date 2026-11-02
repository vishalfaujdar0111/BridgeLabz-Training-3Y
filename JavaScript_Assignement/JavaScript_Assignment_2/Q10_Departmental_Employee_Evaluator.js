// Q10. Departmental Employee Evaluator

// Nested array containing department names and their performance scores.
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("Departmental Employee Evaluator");
console.log("--------------------------------");

// Use a loop to evaluate each department.
for (const department of departments) {
    const departmentName = department[0];
    const score = department[1];
    let performance;

    // Nested if-else conditions classify the performance score.
    if (score >= 90) {
        performance = "Excellent";
    } else {
        if (score >= 75) {
            performance = "Good";
        } else {
            if (score >= 60) {
                performance = "Average";
            } else {
                performance = "Needs Improvement";
            }
        }
    }

    console.log(`${departmentName}: Score = ${score}, Performance = ${performance}`);
}
