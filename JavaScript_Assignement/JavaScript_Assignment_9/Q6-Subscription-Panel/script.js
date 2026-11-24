$(function () {
  let subscribed = true;
  function showStatus(message) {
    // Insert feedback into the DOM so the user sees the result of each action.
    $("#status").text(message).hide().fadeIn(180);
  }
  function topicClick() {
    $(this).closest("li").toggleClass("active");
    showStatus("Topic selection updated.");
  }
  // Attach topic interaction to existing and future checkboxes using delegated .on().
  $("#topic-list").on("change", ".topic", topicClick);
  $("#subscribe").on("click", function () {
    subscribed = true; $(".topic").prop("disabled", false); showStatus("You are subscribed. Notifications are enabled.");
  });
  $("#unsubscribe").on("click", function () {
    subscribed = false; $(".topic").prop("disabled", true); showStatus("You are unsubscribed. Notifications are disabled.");
  });
  $("#add-topic").on("click", function () {
    const name = $("#new-topic").val().trim();
    if (!name) { showStatus("Enter a topic name first."); return; }
    const $item = $("<li>").append($("<label>").append($("<input>", {type:"checkbox", class:"topic", checked:subscribed, disabled:!subscribed})).append(document.createTextNode(" " + name + " ")));
    const $remove = $("<button>", {class:"remove-topic danger secondary", text:"Remove"});
    $item.append($remove); $("#topic-list").append($item); $("#new-topic").val("");
    showStatus("New topic added.");
  });
  // Delegated click works for dynamically added Remove buttons. .off() detaches the
  // specific delegated handler before it is rebound, preventing duplicate actions.
  function removeTopic() { $(this).closest("li").remove(); showStatus("Topic removed."); }
  $("#topic-list").off("click", ".remove-topic", removeTopic).on("click", ".remove-topic", removeTopic);
});
