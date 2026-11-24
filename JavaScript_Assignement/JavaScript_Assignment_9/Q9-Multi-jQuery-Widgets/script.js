(function () {
  // jqOne and jqTwo are aliases created with noConflict(true) in the HTML.
  // Version 1 (jQuery 3.7.1) owns the carousel and active-widget highlighting.
  jqOne(function () {
    const slides = [
      "Slide 1: Welcome to the dashboard.",
      "Slide 2: Review your latest activity.",
      "Slide 3: Your reports are ready.",
      "Slide 4: Keep up the great work.",
      "Slide 5: Dashboard overview complete."
    ];
    let index = 0;
    jqOne("#next-slide").on("click", function () {
      index = (index + 1) % slides.length;
      jqOne(".slide-text").text(slides[index]);
    });
    jqOne(".widget").on("click", function () {
      jqOne(".widget").removeClass("active-widget");
      jqOne(this).addClass("active-widget");
    });
    jqOne("#version-status").text("Carousel/highlighting: jQuery " + jqOne.fn.jquery);
  });

  // Version 2 (jQuery 3.6.4) handles modal notifications and hover tooltips.
  jqTwo(function () {
    jqTwo("#open-modal").on("click", function () { jqTwo("#modal").fadeIn(180); });
    jqTwo("#close-modal").on("click", function () { jqTwo("#modal").fadeOut(180); });
    jqTwo(".widget[title]").on("mouseenter", function () {
      jqTwo(this).attr("data-tooltip", jqTwo(this).attr("title")).removeAttr("title");
    }).on("mouseleave", function () {
      const tip = jqTwo(this).attr("data-tooltip");
      if (tip) jqTwo(this).attr("title", tip).removeAttr("data-tooltip");
    });
  });
})();
