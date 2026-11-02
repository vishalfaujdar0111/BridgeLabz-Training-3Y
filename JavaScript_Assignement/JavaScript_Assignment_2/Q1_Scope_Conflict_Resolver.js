// Q1. Scope Conflict Resolver

// Global variable: available throughout this file.
let bonus = 5000;
globalThis.isPermanent = false; // Global variable

function calculateSalary() {
    // Local variables: these exist only inside this function.
    let salary = 40000;
    let isPermanent = true; // This local variable shadows the global isPermanent.

    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log("Total salary (local isPermanent = true): Rs." + salary);

    // Change the local variable. It does not change the global variable.
    isPermanent = false;
    console.log("Local isPermanent after change:", isPermanent);
    console.log("Global isPermanent remains:", globalThis.isPermanent);
}

calculateSalary();

// The global bonus is not changed by the local variables in the function.
console.log("Global bonus remains: Rs." + bonus);
console.log("Global isPermanent outside function:", globalThis.isPermanent);
