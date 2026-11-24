$(function () {
  const API = "http://localhost:3003/tasks";

  // Query parameters are sent to JSON Server so filtering happens at the API.
  function loadTasks() {
    const filter = $("#filter").val();
    let params = {};
    if (filter === "completed") params.completed = true;
    else if (filter !== "all") params.priority = filter;

    $.ajax({ url: API, method: "GET", data: params, dataType: "json" })
      .done(renderTasks)
      .fail(() => $("#message").text("Unable to load tasks. Check JSON Server on port 3003."));
  }

  function renderTasks(tasks) {
    const $list = $("#tasks").empty();
    $("#message").text(tasks.length ? "" : "No tasks match this filter.");
    tasks.forEach(task => {
      const $item = $("<li>", { class: "card task" + (task.completed ? " done" : "") });
      const $checkbox = $("<input>", { type: "checkbox", checked: task.completed, "aria-label": "Mark " + task.title + " complete" });
      $("<span>").text(task.title + " (" + task.priority + " priority)").appendTo($item);
      $item.prepend($checkbox).appendTo($list);
      // PATCH only the completed field; reload to keep the filtered result accurate.
      $checkbox.on("change", function () {
        $.ajax({ url: API + "/" + task.id, method: "PATCH", contentType: "application/json",
          data: JSON.stringify({ completed: this.checked }) })
          .done(loadTasks)
          .fail(() => { this.checked = !this.checked; $("#message").text("Could not update task status."); });
      });
    });
  }

  $("#filter").on("change", loadTasks);
  loadTasks();
});
