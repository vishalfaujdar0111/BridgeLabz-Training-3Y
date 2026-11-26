# Assignment 8 — JavaScript OOP

This project implements all 9 questions in the supplied `Submission of OOP.pdf`.

## Run the assignment
1. Extract `Assignment_8_OOP_JavaScript.zip`.
2. Open the extracted folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Click **Run all demonstrations** or run each question separately.

**No `npm install` is required.** This is a plain HTML, CSS and JavaScript project with no external dependencies.

## Files
- `index.html` — demonstration page with a section for each question.
- `styles.css` — responsive styling.
- `js/solutions.js` — implementations and sample demonstrations for Q1–Q9.

## Question coverage
1. Student class, `reduce()` average and A/B/C/F grade calculation; three students tested.
2. `calculateBill()` uses `map()` for item prices and `reduce()` for total; invalid menu items throw errors and are handled with try/catch.
3. Product constructor function and `Product.prototype.applyDiscount()`; three products and discounts; abstraction explained.
4. Employee and Manager classes; Manager overrides `work()`; runtime polymorphism demonstrated.
5. User, Driver and Trip classes; fare calculation; missing/negative distance validation and try/catch.
6. Inventory methods using `filter()`, `sort()`, `reduce()` for total value and category grouping.
7. BankAccount with private `#balance`, deposit, withdraw, getBalance and insufficient-funds error handling.
8. MovieTicket and OnlineTicket inheritance, convenience fee, total amount, and inherited prototype `printTicket()`.
9. FitnessAnalytics using `filter()`, `reduce()` and `map()`; empty dataset validation.

## Assumptions documented
The PDF does not specify grade boundaries, low-stock limit or fare rates. The examples use: grades A ≥ 80, B ≥ 60, C ≥ 40, otherwise F; low stock ≤ 5 units; ride fare ₹40 base + ₹12 per km. These are sample rules and can be adjusted if your instructor provided different values.
