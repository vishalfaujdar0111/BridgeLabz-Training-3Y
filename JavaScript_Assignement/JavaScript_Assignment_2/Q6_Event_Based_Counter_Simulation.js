// Q6. Event-Based Counter Simulation

let count = 0;

// Increase the counter by one.
function increment() {
    count++;
    console.log("After increment:", count);

    // Nested function: it can access the count variable from the outer scope.
    function showCount() {
        console.log("Current count from nested function:", count);
    }

    showCount();
}

// Decrease the counter by one.
function decrement() {
    count--;
    console.log("After decrement:", count);
}

// Simulate button clicks by calling the functions manually.
console.log("Initial count:", count);
increment(); // Simulates an increment click.
increment(); // Simulates another increment click.
decrement(); // Simulates a decrement click.
console.log("Final count:", count);
