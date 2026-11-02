// Q7: Closure – Make Multiplier
"use strict";

function makeMultiplier(multiplier) {
    // The returned function remembers the multiplier variable.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log("Triple of 5:", triple(5)); // 15
console.log("Double of 5:", double(5)); // 10

// Closure explanation:
// makeMultiplier() finishes executing, but the returned inner function
// still remembers the multiplier value from its outer lexical scope.
// This remembered variable is called a closure.
