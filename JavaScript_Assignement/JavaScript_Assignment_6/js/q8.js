// Q8 — Retry an order submission up to three times using a loop and await.
(() => {
  function submitOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // A 50% chance of success and a 50% chance of failure.
        if (Math.random() < 0.5) {
          resolve("Order submitted successfully");
        } else {
          reject(new Error("Temporary order API failure"));
        }
      }, 500);
    });
  }

  async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const result = await submitOrder();
        console.log(`Attempt ${attempt}: Success`);
        return `Attempt ${attempt}: Success — ${result}`;
      } catch (error) {
        console.log(`Attempt ${attempt}: Failed`);
        if (attempt === 3) {
          throw new Error("Order could not be processed");
        }
      }
    }
  }

  window.assignmentRunners.q8 = async function () {
    const logs = ["Submitting order (maximum 3 attempts)..."];
    showOutput("q8", logs);
    try {
      const result = await processOrder();
      logs.push(result);
    } catch (error) {
      logs.push(error.message, "Final failure handled gracefully. Please try again later.");
    }
    showOutput("q8", logs);
  };
})();
