// Q1: Callback – Greet User
"use strict";

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    console.log("Executing callback...");
    callback();
}

// Pass showEndMessage as a callback function.
greetUser("Amit", showEndMessage);

// Callback flow:
// 1. greetUser() starts.
// 2. It prints the greeting.
// 3. It calls the callback function.
// 4. showEndMessage() prints the welcome message.
