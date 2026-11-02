// Q6: Person → Faculty → Professor Prototype Chain
"use strict";

function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Person name: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};

const professorOne = new Professor("Dr. Mehta", "Computer Science", "JavaScript");

// Professor object can access methods at all levels of the prototype chain.
professorOne.introduce();       // Person method
professorOne.showDepartment(); // Faculty method
professorOne.showSubject();    // Professor method

console.log(
    "Professor inherits Faculty:",
    Object.getPrototypeOf(Professor.prototype) === Faculty.prototype
);
console.log(
    "Faculty inherits Person:",
    Object.getPrototypeOf(Faculty.prototype) === Person.prototype
);
