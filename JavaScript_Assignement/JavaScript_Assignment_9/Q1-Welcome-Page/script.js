$(function () {
  // Choose a greeting from the visitor's local time.
  const hour = new Date().getHours();
  let greeting = hour < 12 ? "Good morning" : (hour < 17 ? "Good afternoon" : "Good evening");
  $("#greeting").text(greeting + "! Welcome to our website.");

  // Replace the greeting with a motivational quote.
  $("#change-greeting").on("click", function () {
    $("#greeting").text("Believe you can and you’re halfway there. — Theodore Roosevelt");
  });

  // Toggle the welcome copy without removing it from the document.
  $("#toggle-welcome").on("click", function () {
    $("#welcome-message").toggle();
  });

  // Clicking the greeting displays a short browser alert.
  $("#greeting").on("click", function () {
    alert("Thanks for visiting! Have a wonderful day.");
  });
});
