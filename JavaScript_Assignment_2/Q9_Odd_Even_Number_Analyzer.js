// Q9. Odd-Even Number Analyzer

const results = [];

// Loop through numbers from 1 to 30.
for (let number = 1; number <= 30; number++) {
    let result;

    // Check FizzBuzz first so numbers divisible by both 3 and 5 are identified.
    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    // Store each number and its classification in a new array.
    results.push(`${number}: ${result}`);
}

// Display the results array.
console.log("Odd-Even Number Analyzer");
console.log(results);
console.log(results.join("\n"));
