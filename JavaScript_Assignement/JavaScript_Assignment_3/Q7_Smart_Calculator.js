// Q7 – Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Operation "${operation}" is not recognized.`);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;
        case "divide":
            if (secondNumber === 0) {
                throw new CalculationError("Cannot divide by zero.");
            }
            return firstNumber / secondNumber;
        case "power":
            return Math.pow(firstNumber, secondNumber);
        case "root":
            if (firstNumber < 0) {
                throw new CalculationError("Cannot calculate the real square root of a negative number.");
            }
            return Math.sqrt(firstNumber);
        case "subtract":
            return firstNumber - secondNumber;
        default:
            throw new InvalidOperationError(operation);
    }
}

console.log("SMART CALCULATOR REPORT");
console.log("-----------------------");

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}

// Extra tests to demonstrate the required error cases.
const extraTests = [
    { operation: "root", first: -25, second: 0 },
    { operation: "multiply", first: 25, second: 2 }
];

for (const test of extraTests) {
    try {
        const result = calculate(test.operation, test.first, test.second);
        console.log(`${test.operation}: ${result}`);
    } catch (error) {
        console.log(`${test.operation}: ${error.name} - ${error.message}`);
    }
}
