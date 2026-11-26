// Q9 — Predicted output order before execution:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback
//
// Explanation: the current synchronous script runs to completion first.
// Promise.then() queues a microtask. setTimeout(..., 0) queues a macrotask.
// After the current task, the event loop drains microtasks before taking the
// next macrotask, so the Promise callback appears before the timer callback.
(() => {
  window.assignmentRunners.q9 = function () {
    const logs = [
      "Predicted order:",
      "Script start",
      "Script end",
      "Promise callback",
      "Timeout callback",
      "",
      "Actual execution:"
    ];
    showOutput("q9", logs);

    console.log("Script start");
    logs.push("Script start");
    setTimeout(() => {
      console.log("Timeout callback");
      logs.push("Timeout callback");
      showOutput("q9", logs);
    }, 0);
    Promise.resolve().then(() => {
      console.log("Promise callback");
      logs.push("Promise callback");
      showOutput("q9", logs);
    });
    console.log("Script end");
    logs.push("Script end");
    showOutput("q9", logs);
    return window.wait(30);
  };
})();
