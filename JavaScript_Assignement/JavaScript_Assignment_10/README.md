# Assignment 10 — Submission of APIs and Endpoints

This project implements all six questions from the supplied assignment. Each question has its own `db.json` containing at least five sample records, its own HTML page, and its own JavaScript file. Every question uses only its own database file and runs on a different JSON Server port.

## Requirements
- Node.js and npm
- Internet access for CDN libraries (jQuery and Axios)
- A modern browser

## Setup
Open a terminal in this project folder and install the dependency:

```bash
npm install
```

Start each API in a separate terminal window:

```bash
npm run q1   # Q1 Live Search, port 3001
npm run q2   # Q2 Employee Status, port 3002
npm run q3   # Q3 Task Manager, port 3003
npm run q4   # Q4 Multi-API Dashboard, port 3004
npm run q5   # Q5 Timetable, port 3005
npm run q6   # Q6 User Registration, port 3006
```

You can run only the server for the question you want to demonstrate. Do not start two servers on the same port. Each script explicitly points to that question's own `db.json`.

## Open the pages
With the required API server(s) running, open the root `index.html` file in a browser and select a question, or open a question's `index.html` directly.

## Question implementation notes
1. **Live Search:** jQuery AJAX GET `/products?q=value`, loading indicator, product image/name/price, empty-state message.
2. **Employee Status:** XMLHttpRequest GET and PATCH, optimistic status update, rollback and error message on failure.
3. **Task Manager:** jQuery AJAX GET with query parameters for priority/completed filters; PATCH toggles `completed`.
4. **Multi-API Dashboard:** Fetch + `Promise.all` for `/users`, `/orders`, `/products`; skeleton placeholders and the required warning if any request fails.
5. **Timetable:** Fetch `/timetable?day=...`; renders subject, faculty and time, or “No classes today.”
6. **Registration:** Axios GET duplicate email check before POST; shows “Email already registered.” when found.

## Notes
- The Q4 assignment requests three endpoints from different API resources. They are provided by the Q4 server on port 3004 in the same dedicated database file, keeping that question isolated from all others.
- Sample records are illustrative. Q6 duplicate checking uses the five seeded emails in its own `db.json`.
- The JSON Server configuration uses the widely supported JSON Server 0.17 command syntax.
