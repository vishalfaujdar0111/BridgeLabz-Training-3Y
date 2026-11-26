// Q3 — Promise-based replacement for the original callback-style fetchBugs().
(() => {
  function getBugs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Boolean flag simulates an API failure on some runs.
        const shouldFail = Math.random() < 0.3;
        if (shouldFail) {
          reject(new Error("Bug tracker API request failed."));
          return;
        }
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }, 1000);
    });
  }

  window.assignmentRunners.q3 = function () {
    const logs = ["Fetching bugs..."];
    showOutput("q3", logs);
    return getBugs()
      .then(bugs => {
        logs.push("Bugs retrieved successfully:");
        showOutput("q3", logs);
        console.table(bugs.map((bug, index) => ({ number: index + 1, bug })));
        logs.push(...bugs.map((bug, index) => `${index + 1}. ${bug}`));
        showOutput("q3", logs);
      })
      .catch(error => {
        logs.push(`Handled error: ${error.message}`);
        showOutput("q3", logs);
      });
  };
})();
