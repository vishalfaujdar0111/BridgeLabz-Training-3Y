// Q2 – Employee Bonus Calculator
"use strict"; // Prevents accidental creation of implicit global variables.

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("EMPLOYEE BONUS REPORT");
console.log("---------------------");

for (const employee of employees) {
    try {
        // Validate required properties before converting them.
        if (!employee || employee.name === undefined ||
            employee.salary === undefined || employee.years === undefined) {
            throw new Error("Employee data is missing a required property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Salary or years could not be converted to a valid number.");
        }

        // Employees with more than 3 years get 10%; others get 5%.
        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        const totalSalary = salary + bonus;

        console.log(
            `${employee.name}: Salary = Rs.${salary.toFixed(2)}, ` +
            `Experience = ${years} years, Bonus = Rs.${bonus.toFixed(2)}, ` +
            `Total = Rs.${totalSalary.toFixed(2)}`
        );
    } catch (error) {
        console.log(`Error for employee: ${error.message}`);
    }
}

// Strict-mode observation:
// Assigning a value to an undeclared variable (example: bonusAmount = 100)
// would throw ReferenceError instead of silently creating a global variable.
