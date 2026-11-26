// Q5 — The same five-stage pipeline is shown with nested callbacks and async/await.
(() => {
  function runStage(stageName, callback) {
    setTimeout(() => {
      console.log(`Callback pipeline: ${stageName}`);
      callback();
    }, 1000);
  }

  function runWithNestedCallbacks() {
    return new Promise(resolve => {
      const logs = ["Nested callback version started (also logged in browser console)."];
      runStage("design", () => {
        logs.push("design");
        runStage("build", () => {
          logs.push("build");
          runStage("test", () => {
            logs.push("test");
            runStage("deploy", () => {
              logs.push("deploy");
              runStage("celebrate", () => {
                logs.push("celebrate", "Nested callback pipeline completed.");
                resolve(logs);
              });
            });
          });
        });
      });
    });
  }

  function promiseStage(stageName) {
    return new Promise(resolve => {
      setTimeout(() => resolve(stageName), 1000);
    });
  }

  async function runWithAsyncAwait() {
    const logs = ["Async/await version started:"];
    for (const stage of ["design", "build", "test", "deploy", "celebrate"]) {
      const completedStage = await promiseStage(stage);
      logs.push(completedStage);
      showOutput("q5", logs);
    }
    logs.push("Async/await pipeline completed.");
    return logs;
  }

  window.assignmentRunners.q5 = async function () {
    const logs = await runWithNestedCallbacks();
    logs.push("", "Refactored async/await version:");
    showOutput("q5", logs);
    const modernLogs = await runWithAsyncAwait();
    logs.push(...modernLogs);
    logs.push("", "Why async/await is clearer: it keeps sequential asynchronous steps readable from top to bottom, avoids deeply nested callback indentation, and works naturally with try/catch.");
    showOutput("q5", logs);
  };
})();
