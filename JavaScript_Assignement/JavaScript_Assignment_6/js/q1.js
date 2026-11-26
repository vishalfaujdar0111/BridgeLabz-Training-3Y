// Q1 — Each coffee-making stage returns a Promise with a 1–2 second delay.
(() => {
  function asyncStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
      const delay = 1000 + Math.floor(Math.random() * 1001);
      setTimeout(() => {
        // Random failure makes the .catch() path testable.
        if (Math.random() < 0.15) {
          reject(new Error(`${stepName} failed. Please restart the coffee process.`));
          return;
        }
        resolve(successMessage);
      }, delay);
    });
  }

  const boilWater = () => asyncStep("Boiling water", "Water boiled.");
  const brewCoffee = () => asyncStep("Brewing coffee", "Coffee brewed.");
  const pourCoffee = () => asyncStep("Pouring coffee", "Coffee poured into a cup.");

  window.assignmentRunners.q1 = function () {
    const logs = ["Starting the coffee process..."];
    showOutput("q1", logs);
    return boilWater()
      .then(message => {
        logs.push(message);
        showOutput("q1", logs);
        return brewCoffee();
      })
      .then(message => {
        logs.push(message);
        showOutput("q1", logs);
        return pourCoffee();
      })
      .then(message => {
        logs.push(message, "Coffee ready for the team!");
        showOutput("q1", logs);
      })
      .catch(error => {
        logs.push(`Coffee process error: ${error.message}`);
        showOutput("q1", logs);
      });
  };
})();
