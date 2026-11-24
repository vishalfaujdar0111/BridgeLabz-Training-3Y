(function () {
  const API = "http://localhost:3002/employees";
  const container = document.getElementById("employees");
  const message = document.getElementById("message");

  function request(method, url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (data) xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) callback(null, xhr.responseText ? JSON.parse(xhr.responseText) : {});
      else callback(new Error("Request failed (" + xhr.status + ")."));
    };
    xhr.onerror = function () { callback(new Error("Network error. Is JSON Server running?")); };
    xhr.send(data ? JSON.stringify(data) : null);
  }

  function render(employees) {
    container.innerHTML = "";
    employees.forEach(employee => {
      const row = document.createElement("article");
      row.className = "row";
      const name = document.createElement("strong");
      name.textContent = employee.name + " — ";
      const status = document.createElement("span");
      status.className = "status " + employee.status;
      status.textContent = employee.status.toUpperCase();
      const button = document.createElement("button");
      button.textContent = employee.status === "active" ? "Set inactive" : "Set active";
      button.setAttribute("aria-label", "Toggle status for " + employee.name);
      button.addEventListener("click", () => toggle(employee, status, button));
      row.append(name, status, document.createTextNode(" "), button);
      container.appendChild(row);
    });
  }

  function toggle(employee, statusEl, button) {
    const oldStatus = employee.status;
    const newStatus = oldStatus === "active" ? "inactive" : "active";
    // Optimistically update the UI, then revert if PATCH fails.
    employee.status = newStatus;
    statusEl.textContent = newStatus.toUpperCase();
    statusEl.className = "status " + newStatus;
    button.textContent = newStatus === "active" ? "Set inactive" : "Set active";
    button.disabled = true;
    message.textContent = "";
    request("PATCH", API + "/" + employee.id, { status: newStatus }, error => {
      button.disabled = false;
      if (error) {
        employee.status = oldStatus;
        statusEl.textContent = oldStatus.toUpperCase();
        statusEl.className = "status " + oldStatus;
        button.textContent = oldStatus === "active" ? "Set inactive" : "Set active";
        message.className = "message error";
        message.textContent = "Update failed. The previous status has been restored.";
      } else {
        message.className = "message success";
        message.textContent = employee.name + " is now " + newStatus + ".";
      }
    });
  }

  request("GET", API, null, (error, employees) => {
    if (error) { message.className = "message error"; message.textContent = error.message; container.innerHTML = ""; }
    else render(employees);
  });
})();
