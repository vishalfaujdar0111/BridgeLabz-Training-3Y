// Q8: Employee Salary Projection
// Calculate salary for five years using an annual increment.

const currentSalary = 30000;
const annualIncrementRate = 8; // Percentage
let projectedSalary = currentSalary;

const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    // Increase the salary by the annual increment rate.
    projectedSalary *= (1 + annualIncrementRate / 100);
    projectedSalary = Math.round(projectedSalary);

    salaryProjection.push({
        Year: year,
        Salary: `₹${projectedSalary.toLocaleString("en-IN")}`
    });
}

console.table(salaryProjection);
