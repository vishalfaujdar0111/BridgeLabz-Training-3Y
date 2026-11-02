// Q8 – Strict Mode Showdown
"use strict";

// The original function is:
// function demo(a, a) {
//     total = 10;
//     delete total;
// }
// demo(5, 10);
//
// In a non-strict function, duplicate parameter names are allowed.
// Assigning to undeclared total creates a global property in typical script
// environments. Deleting an unqualified identifier is not reliable to use
// as a cleanup technique; behavior depends on how the binding was created.
//
// In strict mode, duplicate parameter names and assignment to an undeclared
// variable are illegal. A strict function cannot even be parsed with duplicate
// parameter names. The examples below create functions so each mode can be
// demonstrated independently without making this file fail to parse.

console.log("STRICT MODE SHOWDOWN");
console.log("--------------------");

// Demonstrate a sloppy-mode function. Function() creates a non-strict function
// because its body does not contain the "use strict" directive.
const sloppyDemo = Function(
    "a", "a",
    'total = 10; return { secondParameter: a, totalValue: total };'
);

try {
    const sloppyResult = sloppyDemo(5, 10);
    console.log("Without strict mode:", sloppyResult);
    console.log("Global total created:", globalThis.total);

    // Clean up the global property created by the sloppy-mode demonstration.
    delete globalThis.total;
} catch (error) {
    console.log("Sloppy-mode error:", error.name, error.message);
}

// Strict-mode duplicate parameters are a SyntaxError.
try {
    Function('"use strict"; return function demo(a, a) {};');
} catch (error) {
    console.log("Strict duplicate-parameter error:", error.name, error.message);
}

// Strict-mode undeclared assignment throws ReferenceError.
const strictAssignmentDemo = Function(
    '"use strict"; undeclaredTotal = 10;'
);

try {
    strictAssignmentDemo();
} catch (error) {
    console.log("Strict undeclared-variable error:", error.name, error.message);
}

// Correct ES6 version: unique parameters, const/let declarations, no implicit globals.
function correctDemo(firstValue, secondValue) {
    const total = firstValue + secondValue;
    console.log("Correct ES6 total:", total);
}

correctDemo(5, 10);

// Strict mode prevents accidental globals and disallows duplicate parameter names.
// Use declared variables and unique parameter names in modern JavaScript.
