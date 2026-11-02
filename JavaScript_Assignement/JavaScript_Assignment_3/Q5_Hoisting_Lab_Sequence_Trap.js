// Q5 – Hoisting Lab: The Sequence Trap
"use strict";

// Original sequence (kept as comments because it stops with a TDZ error):
// console.log(score); // undefined: var declaration is hoisted and initialized.
// announce();         // Works: function declaration is hoisted.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }

// The original startGame() call throws ReferenceError because the function
// tries to access status before its let initialization (Temporal Dead Zone).

console.log("FIXED VERSION");
console.log("--------------");

// Fix: declare let variables before code that reads them.
let score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log("Status:", status);
}

console.log("Score:", score);
announce();
startGame();

// Arrow-function comparison:
console.log("\nARROW FUNCTION VERSION");

// Function declarations are hoisted and can be called before their definition.
// Arrow functions assigned to const are not usable before initialization.
const announceArrow = () => console.log("Game started (arrow function)");
const startGameArrow = () => console.log("Status:", status);

announceArrow();
startGameArrow();

// Hoisting notes:
// - var: declaration is hoisted and initialized with undefined.
// - let/const: declarations are hoisted but remain in the Temporal Dead Zone
//   until the declaration line executes.
// - Function declarations: function body is available before its source line.
// - Arrow functions: the variable declaration follows let/const rules.
