// Q7: Smart Guessing Game
// Generate a secret number from 1 to 50 and compare it with a test guess.

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Test value; change this to test other outcomes.

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number (for testing): ${secretNumber}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    const difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
