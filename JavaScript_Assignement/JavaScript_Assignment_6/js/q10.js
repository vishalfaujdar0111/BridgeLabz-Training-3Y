// Q10 — Each delivery stage is a Promise with a random 1–2 second delay.
// Await pauses this async function until the current stage settles; it does
// not block the browser's main thread. A rejection jumps to the catch block.
(() => {
  function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
      const delay = 1000 + Math.floor(Math.random() * 1001);
      setTimeout(() => {
        if (Math.random() < 0.15) {
          reject(new Error(`${stepName} failed`));
          return;
        }
        resolve(successMessage);
      }, delay);
    });
  }

  const takeOrder = () => deliveryStep("takeOrder", "Step 1: Order taken");
  const prepare = () => deliveryStep("prepare", "Step 2: Food prepared");
  const pack = () => deliveryStep("pack", "Step 3: Package ready");
  const dispatch = () => deliveryStep("dispatch", "Step 4: Out for delivery");
  const deliver = () => deliveryStep("deliver", "Delivery completed!");

  async function runPipeline() {
    const logs = ["Start Pipeline"];
    showOutput("q10", logs);

    try {
      // Sequential awaits preserve the required order of delivery operations.
      for (const step of [takeOrder, prepare, pack, dispatch, deliver]) {
        const message = await step();
        logs.push(message);
        showOutput("q10", logs);
      }
    } catch (error) {
      logs.push("Pipeline failed!", `Reason: ${error.message}`);
      showOutput("q10", logs);
    }
  }

  window.assignmentRunners.q10 = runPipeline;
})();
