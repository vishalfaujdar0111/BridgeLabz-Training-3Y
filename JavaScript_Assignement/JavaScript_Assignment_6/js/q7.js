// Q7 — allSettled() waits until every input Promise has either fulfilled or rejected.
(() => {
  function createModulePromise(moduleName, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Randomly reject a module so both allSettled statuses are demonstrated.
        if (Math.random() < 0.3) {
          reject(new Error(`${moduleName} failed to load`));
        } else {
          resolve(`${moduleName} Loaded`);
        }
      }, delay);
    });
  }

  function loadProfile() {
    return createModulePromise("Profile", 2000);
  }
  function loadPosts() {
    return createModulePromise("Posts", 1500);
  }
  function loadMessages() {
    return createModulePromise("Messages", 1000);
  }

  window.assignmentRunners.q7 = async function () {
    const startTime = Date.now();
    const logs = ["Loading profile, posts, and messages..."];
    showOutput("q7", logs);

    const results = await Promise.allSettled([
      loadProfile(),
      loadPosts(),
      loadMessages()
    ]);

    results.forEach((result, index) => {
      const moduleName = ["Profile", "Posts", "Messages"][index];
      if (result.status === "fulfilled") {
        logs.push(`${moduleName}: SUCCESS — ${result.value}`);
      } else {
        logs.push(`${moduleName}: FAILED — ${result.reason.message}`);
      }
    });

    const elapsedTime = Date.now() - startTime;
    logs.push(`Total time taken: ${elapsedTime} ms`);
    showOutput("q7", logs);
  };
})();
