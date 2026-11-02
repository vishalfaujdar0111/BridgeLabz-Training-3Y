// Q8: Custom Array Prototype Method – myMap()
"use strict";

// Add myMap() to Array.prototype so all arrays can use it.
// Non-enumerable property avoids showing the method in normal array iteration.
Object.defineProperty(Array.prototype, "myMap", {
    value: function (callback, thisArg) {
        if (this === null || this === undefined) {
            throw new TypeError("myMap called on null or undefined");
        }

        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }

        const sourceArray = Object(this);
        const length = sourceArray.length >>> 0;
        const result = new Array(length);

        for (let index = 0; index < length; index++) {
            // Match built-in map(): skip empty slots in sparse arrays.
            if (index in sourceArray) {
                result[index] = callback.call(
                    thisArg,
                    sourceArray[index],
                    index,
                    sourceArray
                );
            }
        }

        return result;
    },
    writable: true,
    configurable: true
});

const numbers = [1, 2, 3];

const doubled = numbers.myMap(number => number * 2);
const squared = numbers.myMap(number => number * number);

console.log("Original array:", numbers);
console.log("Doubled using myMap():", doubled);
console.log("Squared using myMap():", squared);
console.log("Built-in map comparison:", numbers.map(number => number * 2));
