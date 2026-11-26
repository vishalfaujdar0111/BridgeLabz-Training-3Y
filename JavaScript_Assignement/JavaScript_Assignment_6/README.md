# Assignment 6 — Async Programming with JavaScript (Lectures 17–20)

This project implements all **10 questions (Q1–Q10)** from the supplied assignment PDF.

## Run the assignment

1. Extract `Assignment_6_Async_Programming_JS.zip`.
2. Open the extracted `Assignment_6_Async_Programming_JS` folder in VS Code.
3. Open `index.html` in a browser, or right-click it and choose **Open with Live Server**.
4. Run each question using its button, or select **Run all demos**.

**No `npm install` is required.** This is a browser-based project using core JavaScript (ES6+), HTML, and CSS only.

For Q6, an internet connection is required to call `https://fakestoreapi.com/products`. If the API is unavailable, the required failure message is shown.

## Project structure

```text
Assignment_6_Async_Programming_JS/
├── index.html
├── styles.css
├── README.md
└── js/
    ├── common.js
    ├── main.js
    ├── q1.js
    ├── q2.js
    ├── q3.js
    ├── q4.js
    ├── q5.js
    ├── q6.js
    ├── q7.js
    ├── q8.js
    ├── q9.js
    └── q10.js
```

## Question mapping

| File | Assignment requirement |
|---|---|
| `q1.js` | Coffee process: three Promise steps, `.then()` chaining, random failure, `.catch()` |
| `q2.js` | Synchronous log, `setTimeout` macrotask, Promise microtask, expected order explanation |
| `q3.js` | Callback-to-Promise migration using `getBugs()`, `console.table()`, random boolean failure, `.catch()` |
| `q4.js` | Server A (2s), Server B (3s), `Promise.all()`, `Promise.race()`, random failure handling |
| `q5.js` | Five-stage nested callback pipeline and async/await refactor with readability comments |
| `q6.js` | Fake Store API fetch, title/price/image logging, dynamic HTML cards, try/catch failure message |
| `q7.js` | Given module delays, `Promise.allSettled()`, random rejection, success/failure status, elapsed time |
| `q8.js` | 50%-failure `submitOrder()`, up to 3 attempts with loop + await, final error handling |
| `q9.js` | Predicted and actual event-loop order, explanation of microtasks vs macrotasks |
| `q10.js` | Five-step async delivery pipeline, random 1–2s delay and failure, async/await and try/catch |

## Important behavior

- Q1 and Q10 intentionally include random failures so their error handling can be tested.
- Q3 intentionally simulates occasional API failure using a boolean variable.
- Q4 handles failures from both Promise combinators.
- Q7 uses `Promise.allSettled()` so one failed module does not prevent reporting the others.
- Q8 may succeed on any of the three attempts; if all fail, it throws the exact message `Order could not be processed`.
- Q9's predicted order is: `Script start`, `Script end`, `Promise callback`, `Timeout callback`.
- Q6 requires network access; the other questions run locally in the browser.

## Testing

Use the browser developer console (Chrome: View → Developer → JavaScript Console) to inspect the required `console.log()` and `console.table()` output. Randomized questions can be run multiple times to observe both success and failure paths.
