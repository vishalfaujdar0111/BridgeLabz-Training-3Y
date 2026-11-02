// Q10 – Nested Hoisting and Closures
"use strict";

function outer() {
    // count is hoisted within outer() and initialized as undefined.
    console.log("Outer count before assignment:", count);

    var count = 5;

    function inner() {
        // This is a separate local count. Its var declaration is hoisted
        // within inner(), so it shadows outer count and begins as undefined.
        console.log("Inner count before assignment:", count);

        var count = 10;
        console.log("Inner count after assignment:", count);
    }

    inner();
    console.log("Outer count after inner():", count);
}

console.log("ORIGINAL FUNCTION DECLARATION");
outer();

// Arrow-function version:
console.log("\nARROW FUNCTION VERSION");

function outerWithArrow() {
    console.log("Outer count before assignment:", count);

    var count = 5;

    // Arrow functions still have their own local var scope.
    // The local var count is hoisted and shadows the outer count here too.
    const inner = () => {
        console.log("Inner arrow count before assignment:", count);

        var count = 10;
        console.log("Inner arrow count after assignment:", count);
    };

    inner();
    console.log("Outer count after inner arrow():", count);
}

outerWithArrow();

// Expected output in both versions:
// Outer before assignment: undefined
// Inner before assignment: undefined
// Inner after assignment: 10
// Outer after inner call: 5
//
// Debugger guidance:
// Put a breakpoint on each console.log and watch both count variables.
// Call stack while inside inner(): outer -> inner.
// Call stack while inside the arrow function: outerWithArrow -> inner.
// The inner count is a separate binding; changing it does not change outer count.
