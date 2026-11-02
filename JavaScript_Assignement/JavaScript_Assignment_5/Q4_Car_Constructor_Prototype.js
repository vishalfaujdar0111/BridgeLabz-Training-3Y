// Q4: Car Constructor Function and Prototype Method
"use strict";

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Define the method once on the prototype.
// All Car objects share this same function.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const carOne = new Car("Toyota", "Fortuner");
const carTwo = new Car("Honda", "City");

carOne.getDetails();
carTwo.getDetails();

// Demonstrate method sharing.
console.log(
    "Both cars share the same getDetails method:",
    carOne.getDetails === carTwo.getDetails
);
