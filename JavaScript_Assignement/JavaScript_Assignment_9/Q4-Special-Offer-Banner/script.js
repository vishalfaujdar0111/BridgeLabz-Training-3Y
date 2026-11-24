$(function () {
  const $banners = $(".banner");
  let current = 0;
  // Explicit controls demonstrate hide/show, slide, and fade effects.
  $("#hide").on("click", function () { $banners.first().hide(); });
  $("#show").on("click", function () { $banners.show(); });
  $("#slide-up").on("click", function () { $banners.slideUp(); });
  $("#slide-down").on("click", function () { $banners.slideDown(); });
  $("#fade-out").on("click", function () { $banners.fadeOut(); });
  $("#fade-in").on("click", function () { $banners.fadeIn(); });

  // Rotate one visible banner at a time with the requested 5-second interval.
  $banners.hide().eq(0).fadeIn();
  setInterval(function () {
    $banners.eq(current).stop(true, true).fadeOut(250);
    current = (current + 1) % $banners.length;
    $banners.eq(current).stop(true, true).fadeIn(250);
    $("#rotation-status").text("Showing offer " + (current + 1) + " of " + $banners.length + ".");
  }, 5000);
});
