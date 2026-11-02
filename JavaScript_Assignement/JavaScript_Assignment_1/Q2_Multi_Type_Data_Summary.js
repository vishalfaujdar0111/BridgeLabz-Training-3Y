// Q2: Multi-Type Data Summary
// Identify each value's type and display a formatted report in one console.table().

const userName = "Vishal";                 // String
const userAge = 21;                       // Number
const isStudent = true;                   // Boolean
const subjects = ["JavaScript", "HTML"];  // Array
const user = { city: "Mathura" };         // Object
const middleName = null;                  // Null
let address;                              // Undefined

const dataSummary = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "userAge", value: userAge, type: typeof userAge },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "subjects", value: JSON.stringify(subjects), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "user", value: JSON.stringify(user), type: typeof user },
    { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "address", value: address, type: typeof address }
];

console.table(dataSummary);
