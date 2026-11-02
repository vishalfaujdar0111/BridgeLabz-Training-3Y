// Q9: Person → Student Inheritance using ES6 Classes
"use strict";

// Prototype/constructor-function version (from Q5).
function PersonPrototype(name) {
    this.name = name;
}

PersonPrototype.prototype.showName = function () {
    console.log("Prototype version name:", this.name);
};

function StudentPrototype(name, branch) {
    PersonPrototype.call(this, name);
    this.branch = branch;
}

StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;

StudentPrototype.prototype.showBranch = function () {
    console.log("Prototype version branch:", this.branch);
};

// ES6 class version using extends and super().
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Class version name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls the parent class constructor.
        this.branch = branch;
    }

    showBranch() {
        console.log("Class version branch:", this.branch);
    }
}

const prototypeStudent = new StudentPrototype("Neha", "CSE");
const classStudent = new Student("Neha", "CSE");

console.log("PROTOTYPE VERSION");
prototypeStudent.showName();
prototypeStudent.showBranch();

console.log("\nES6 CLASS VERSION");
classStudent.showName();
classStudent.showBranch();

// Both approaches provide the same data and behavior.
console.log("\nComparison:");
console.log("Same name:", prototypeStudent.name === classStudent.name);
console.log("Same branch:", prototypeStudent.branch === classStudent.branch);
console.log(
    "Class Student inherits Person:",
    Object.getPrototypeOf(Student.prototype) === Person.prototype
);
