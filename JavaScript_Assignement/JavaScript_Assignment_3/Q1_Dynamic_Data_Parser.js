// Q1 – Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("DYNAMIC DATA PARSER REPORT");
console.log("--------------------------");

// Convert every value to Number, Boolean, and String forms.
for (let index = 0; index < apiData.length; index++) {
    const value = apiData[index];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`\nItem ${index + 1}`);
    console.log(`Original: ${stringValue}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: "${stringValue}"`);

    // Whitespace-only strings are treated as invalid even though Number(" ") is 0.
    const isWhitespaceOnly = typeof value === "string" && value.trim() === "";
    if (Number.isNaN(numberValue) || isWhitespaceOnly) {
        invalidNumbers.push(value);
        console.log("Status: INVALID NUMBER");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: VALID NUMBER");
    }
}

console.log("\nFINAL SUMMARY");
console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidNumbers.length);
