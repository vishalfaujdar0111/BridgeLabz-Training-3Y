// Connect the page buttons to the individual question runners.
document.addEventListener("DOMContentLoaded", () => {
  async function runQuestion(questionId, button) {
    if (button) button.disabled = true;
    try {
      await window.assignmentRunners[questionId]();
    } catch (error) {
      console.error(`${questionId} unexpected error:`, error);
      window.showOutput(questionId, [`Unexpected error: ${error.message}`]);
    } finally {
      if (button) button.disabled = false;
    }
  }

  document.querySelectorAll("[data-run]").forEach(button => {
    button.addEventListener("click", () => runQuestion(button.dataset.run, button));
  });

  document.getElementById("runAll").addEventListener("click", async event => {
    const button = event.currentTarget;
    button.disabled = true;
    for (let number = 1; number <= 10; number++) {
      await runQuestion(`q${number}`, null);
    }
    button.disabled = false;
  });

  document.getElementById("clearAll").addEventListener("click", () => {
    for (let number = 1; number <= 10; number++) {
      window.showOutput(`q${number}`, "Output cleared. Run this question to see the result.");
    }
    document.getElementById("products").replaceChildren();
  });
});
