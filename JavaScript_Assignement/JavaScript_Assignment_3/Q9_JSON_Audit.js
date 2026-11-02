// Q9 – JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

console.log("JSON AUDIT REPORT");
console.log("-----------------");

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        // A breakpoint here lets you inspect rawData, index, and cleanData.
        debugger;

        const parsedEntry = JSON.parse(rawData[index]);

        // Check that both required keys are present.
        if (!Object.prototype.hasOwnProperty.call(parsedEntry, "user") ||
            !Object.prototype.hasOwnProperty.call(parsedEntry, "age")) {
            throw new Error('Missing required key: "user" or "age".');
        }

        // Convert age to a number and validate it.
        const age = Number(parsedEntry.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number.");
        }

        cleanData.push({
            user: parsedEntry.user,
            age: age
        });

        console.log(`Line ${lineNumber}: Valid JSON entry.`);
    } catch (error) {
        auditErrors.push({ line: lineNumber, message: error.message });
        console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
    }
}

// Bonus: find users under 18 years old.
const under18Users = cleanData.filter(person => person.age < 18);

console.log("\nFINAL SUMMARY");
console.log("Clean data:", cleanData);
console.log("Audit errors:", auditErrors);
console.log("Valid entries:", cleanData.length);
console.log("Invalid entries:", auditErrors.length);
console.log("Users under 18:", under18Users);
