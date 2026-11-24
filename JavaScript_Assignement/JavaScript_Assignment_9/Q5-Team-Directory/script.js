$(function () {
  // .children() scopes department selection to its direct list; reports exclude the manager.
  $(".manager-button").on("click", function () {
    const $department = $(this).closest(".department");
    $department.children("ul").children(".employee").removeClass("highlight");
    $department.children("ul").children(".employee").filter(function () {
      return $(this).attr("data-manager") !== $(this).find(".employee-name").text();
    }).addClass("highlight");
  });
  // .next() reveals the contact span immediately after the employee name.
  $(".employee").on("mouseenter", function () { $(this).find(".contact").show(); })
                .on("mouseleave", function () { $(this).find(".contact").hide(); });
  // Clicking a department title uses .children() to style its direct members.
  $(".department-title").on("click", function () {
    $(this).parent().children("ul").children(".employee").toggleClass("active");
  });
  // Pick a random employee and highlight that employee's siblings in the same list.
  $("#random").on("click", function () {
    const $all = $(".employee");
    const index = Math.floor(Math.random() * $all.length);
    const $chosen = $all.eq(index);
    $(".employee").removeClass("highlight");
    $chosen.siblings(".employee").addClass("highlight");
    $chosen.addClass("active");
  });
  // Traverse to the department parent, then find its team list to collapse/expand it.
  $("#collapse").on("click", function () {
    const $team = $(this).closest(".department").parent().find(".department").first().children("ul");
    $team.slideToggle();
  });
});
