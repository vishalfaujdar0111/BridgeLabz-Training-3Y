$(function () {
  // Click (or keyboard activation) toggles the associated answer.
  $(".faq-question").on("click keypress", function (event) {
    if (event.type === "keypress" && event.which !== 13 && event.which !== 32) return;
    $(this).next(".faq-answer").stop(true, true).slideToggle();
  });
  // Hover styling is also supplied by CSS; this handler adds a smooth transition.
  $(".faq-question").on("mouseenter", function () { $(this).css("color", "#3659c9"); })
                   .on("mouseleave", function () { $(this).css("color", ""); });
  // Double-clicking any question collapses every answer.
  $(".faq-question").on("dblclick", function () { $(".faq-answer").stop(true, true).slideUp(); });
  // Focus/blur on an answer input highlights/resets its parent FAQ item.
  $(".faq-answer input").on("focus", function () { $(this).closest(".faq-item").css("background", "#eef2ff"); })
                       .on("blur", function () { $(this).closest(".faq-item").css("background", ""); });
});
