// Q6: Employee Management System (Classes + Object Methods)
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new Error("Bonus percentage cannot be negative.");
        }
        this.salary += this.salary * (percent / 100);
    }
}

const employees = [
    new Employee(1, "Amit", "HR", 30000),
    new Employee(2, "Sara", "Finance", 40000),
    new Employee(3, "Kiran", "IT", 50000),
    new Employee(4, "Ravi", "Sales", 35000),
    new Employee(5, "Neha", "Support", 32000)
];

// Apply a 10% bonus to employee 3 as a demonstration.
employees[2].applyBonus(10);

console.log("EMPLOYEE ANNUAL SALARIES");
employees.forEach(employee => {
    console.log(
        `${employee.name} (${employee.department}): Rs.${employee.getAnnualSalary().toFixed(2)}`
    );
});

// reduce() calculates the company's total annual salary payout.
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("Total Annual Company Payout: Rs." + totalAnnualPayout.toFixed(2));
