$(function () {
  const $courses = $(".course");
  function filterCourses() {
    const query = $("#search").val().trim().toLowerCase();
    let matches = 0;
    $courses.each(function () {
      const $card = $(this);
      const title = $card.find("h3").text();
      const description = $card.find("p").text();
      const text = (title + " " + description).toLowerCase();
      const isMatch = !query || text.includes(query);
      // Hide non-matches and restore original text before applying a fresh highlight.
      $card.toggle(isMatch);
      $card.find("h3, p").each(function () { $(this).text($(this).text()); });
      if (isMatch) {
        matches++;
        if (query) {
          // Escape the query before using it in a regular expression.
          const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const regex = new RegExp("(" + escaped + ")", "ig");
          $(this).find("h3, p").each(function () {
            const original = $(this).text();
            $(this).html(original.replace(regex, "<mark>$1</mark>"));
          });
        }
      }
    });
    $("#count").text("Showing " + matches + " of " + $courses.length + " courses");
  }
  // keyup provides the requested real-time filtering behavior.
  $("#search").on("keyup", filterCourses);
  $("#clear").on("click", function () { $("#search").val(""); filterCourses(); $("#search").trigger("focus"); });
});
