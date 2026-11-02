// Q3 – Transaction Validator
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

class TransactionValidationError extends Error {
    constructor(message, category) {
        super(message);
        this.name = "TransactionValidationError";
        this.category = category;
    }
}

console.log("TRANSACTION VALIDATION REPORT");
console.log("-----------------------------");

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    // Put a breakpoint on the next line to inspect index, transaction,
    // validTransactions, and invalidTransactions in the debugger.
    debugger;

    try {
        if (transaction === null) {
            throw new TransactionValidationError("Transaction is null.", "Null entry");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new TransactionValidationError(
                "Transaction is missing id or amount.",
                "Missing field"
            );
        }

        if (transaction.amount < 0) {
            throw new TransactionValidationError(
                "Transaction amount cannot be negative.",
                "Negative amount"
            );
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);
    } catch (error) {
        invalidTransactions.push({
            transaction,
            category: error.category || "Unexpected error",
            message: error.message
        });
        console.log(`Transaction ${index + 1}: INVALID - ${error.message}`);
    }
}

console.log("\nFINAL REPORT");
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log("Successful count:", validTransactions.length);
console.log("Failed count:", invalidTransactions.length);
