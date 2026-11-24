(async function () {
  const base = "http://localhost:3004";
  const endpoints = [
    ["users", base + "/users"],
    ["orders", base + "/orders"],
    ["products", base + "/products"]
  ];
  try {
    // Promise.all starts all three fetches together and waits for every response.
    const responses = await Promise.all(endpoints.map(([, url]) => fetch(url)));
    if (responses.some(response => !response.ok)) throw new Error("One or more API requests failed.");
    const datasets = await Promise.all(responses.map(response => response.json()));
    endpoints.forEach(([key], index) => {
      const target = document.getElementById(key);
      target.className = "";
      target.innerHTML = "";
      const value = document.createElement("strong");
      value.textContent = datasets[index].length;
      target.appendChild(value);
    });
  } catch (error) {
    // The skeletons are replaced with unavailable labels and the required warning.
    document.getElementById("warning").className = "message error";
    document.getElementById("warning").textContent = "Some data could not be loaded.";
    ["users", "orders", "products"].forEach(key => {
      const target = document.getElementById(key);
      target.className = "";
      target.textContent = "Unavailable";
    });
  }
})();
