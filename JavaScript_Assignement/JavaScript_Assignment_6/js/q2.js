// Q2 — Synchronous code runs first. Promise callbacks are microtasks;
// setTimeout callbacks are macrotasks and run after the current task and
// the microtask queue have been processed.
(() => {
  window.assignmentRunners.q2 = function () {
    const logs = [];
    const log = message => {
      logs.push(message);
      showOutput("q2", logs);
    };

    log("Start");
    setTimeout(() => log("setTimeout callback (macrotask)"), 0);
    Promise.resolve().then(() => log("Promise.then callback (microtask)"));
    log("Synchronous log");
    log("End");
    return window.wait(30);
  };
})();
