// Q3. Math Utility Dashboard

const x = 16.75;

// Perform the required mathematical operations.
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);

// Generate a random integer from 10 to 50 (both inclusive).
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display all results using a template literal.
const summary = `
Math Utility Dashboard
----------------------
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Cube (x^3): ${cube}
Random Number (10-50): ${randomNumber}
`;

console.log(summary);
