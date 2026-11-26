// Q4 — Two concurrent deployment requests. Promise.all waits for both;
// Promise.race settles as soon as the first server Promise settles.
(() => {
  function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.2) {
          reject(new Error(`${serverName} deployment failed.`));
        } else {
          resolve(`${serverName} deployment completed`);
        }
      }, delay);
    });
  }

  window.assignmentRunners.q4 = async function () {
    const logs = ["Starting deployments on Server A (2s) and Server B (3s)..."];
    showOutput("q4", logs);

    // Create the two Promises once so both combinators observe the same requests.
    const serverA = deployServer("Server A", 2000);
    const serverB = deployServer("Server B", 3000);

    // Attach a rejection handler to each combinator to avoid unhandled rejections.
    const allResult = Promise.all([serverA, serverB])
      .then(() => "Deployment completed for all servers")
      .catch(error => `Promise.all error: ${error.message}`);

    const raceResult = Promise.race([serverA, serverB])
      .then(message => `Fastest response: ${message}`)
      .catch(error => `Fastest response failed: ${error.message}`);

    const [allMessage, raceMessage] = await Promise.all([allResult, raceResult]);
    logs.push(raceMessage, allMessage);
    showOutput("q4", logs);
  };
})();
