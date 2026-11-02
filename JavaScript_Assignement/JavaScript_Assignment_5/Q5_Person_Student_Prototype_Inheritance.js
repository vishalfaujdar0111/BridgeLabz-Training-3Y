// Q5: Person → Student Prototype Inheritance
"use strict";

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    // Call Person constructor to initialize the inherited name property.
    Person.call(this, name);
    this.branch = branch;
}

// Student inherits methods from Person.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const studentOne = new Student("Aman", "Computer Science");

studentOne.showName();
studentOne.showBranch();

// Demonstrate the prototype chain.
console.log("Student prototype is Person prototype:",
    Object.getPrototypeOf(Student.prototype) === Person.prototype);
console.log("Student can use Person method:", typeof studentOne.showName === "function");
