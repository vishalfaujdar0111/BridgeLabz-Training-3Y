// Q3: Arrow Function and the 'this' Keyword
"use strict";

const user = {
    name: "Rahul",

    // Arrow functions do not create their own 'this'.
    // At the top level in a Node.js module, this.name is undefined.
    showName: () => {
        console.log("Arrow function name:", this.name);
    }
};

user.showName(); // Output: undefined in Node.js CommonJS/module context.

// Fix: use a normal method function, whose 'this' refers to the object.
const correctedUser = {
    name: "Rahul",

    showName: function () {
        console.log("Normal function name:", this.name);
    }
};

correctedUser.showName(); // Output: Rahul

// Explanation:
// An arrow function takes 'this' from its surrounding lexical scope.
// It does not bind 'this' to the object before the dot.
// A normal function called as correctedUser.showName() gets correctedUser as this.
