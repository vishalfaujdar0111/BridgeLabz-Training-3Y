// Q3: Monthly Expense Tracker
// Add expenses, calculate the average, and apply 10% tax.

const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 1200 },
    { category: "Rent", amount: 8000 },
    { category: "Bills", amount: 1800 },
    { category: "Leisure", amount: 1000 }
];

let totalExpense = 0;

// Add each category amount to the total.
for (const expense of expenses) {
    totalExpense += expense.amount;
}

const averageExpense = totalExpense / expenses.length;
const taxRate = 0.10;
const taxAmount = totalExpense * taxRate;
let finalAmount = totalExpense;
finalAmount += taxAmount; // Assignment operator adds tax to the total.

console.log("Monthly Expense Summary");
console.log("-----------------------");
console.log(`Total expenses: ₹${totalExpense.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
