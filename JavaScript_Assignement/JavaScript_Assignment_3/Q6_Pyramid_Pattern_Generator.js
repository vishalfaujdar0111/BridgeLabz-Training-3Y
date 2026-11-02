// Q6 – Pyramid Pattern Generator
"use strict";

// In a browser, prompt() asks for the row limit.
// In Node.js or another environment without prompt(), the default is 5.
const userInput = typeof prompt === "function"
    ? prompt("Enter number of pyramid rows (default 5):")
    : null;

let rows = userInput === null || userInput.trim() === ""
    ? 5
    : Number(userInput);

if (!Number.isInteger(rows) || rows < 1) {
    console.log("Invalid input. Using default row limit = 5.");
    rows = 5;
}

console.log(`PYRAMID PATTERN (${rows} rows)`);
console.log("------------------------------");

// Use let so each loop iteration has its own block-scoped binding.
for (let row = 1; row <= rows; row++) {
    let pattern = "";

    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

// var observation:
// Replacing let with var makes the loop variable function-scoped rather than
// block-scoped. After the loop, row remains accessible with value rows + 1.
// With let, reading row outside the loop would throw ReferenceError.
// Put a breakpoint on the outer and inner loops to watch row and column change.
// Strict-mode observation: an undeclared loop variable (for (i = 0; ...))
// throws ReferenceError; always declare it with let, const, or var.
