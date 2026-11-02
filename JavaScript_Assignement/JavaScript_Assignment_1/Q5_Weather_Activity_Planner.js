// Q5: Weather Activity Planner
// Recommend an activity using rain, temperature, and wind speed.

const temperature = 22;
const isRaining = false;
const windSpeed = 10;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (!isRaining && temperature >= 15 && temperature <= 35 && windSpeed <= 20) {
    console.log("Perfect day for a walk.");
} else {
    // Covers weather combinations not specified by the main rules.
    console.log("Check the weather conditions before planning an activity.");
}
