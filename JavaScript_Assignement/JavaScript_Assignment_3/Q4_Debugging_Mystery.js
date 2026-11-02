// Q4 – Debugging Mystery
"use strict";

// Original faulty version:
// function showMessage() {
//     greeting = "Welcome"; // ReferenceError in strict mode: greeting is undeclared.
//     console.log(greeting);
// }
// showMessage();

// Corrected version: declare greeting in the function's local scope.
function showMessage() {
    let greeting = "Welcome";

    // Add greeting to the Watch panel in VS Code to observe its value.
    debugger;

    console.log(greeting);
}

showMessage();

// Explanation:
// Strict mode does not allow assignment to an undeclared identifier.
// Using let creates a local variable available inside showMessage().
// The call stack while paused at debugger contains showMessage().
