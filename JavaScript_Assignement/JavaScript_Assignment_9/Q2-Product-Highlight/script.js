$(function () {
  // Highlight the clicked product card and report unavailable stock.
  $(".product").on("click", function (event) {
    if ($(event.target).closest(".favorite").length) return;
    $(".product").removeClass("selected");
    $(this).addClass("selected");
    if ($(this).attr("data-stock") === "false") alert("Sorry, this product is currently out of stock.");
  });

  // Reveal extra product details while the pointer is over the card.
  $(".product").on("mouseenter", function () { $(this).find(".details").stop(true, true).slideDown(150); });
  $(".product").on("mouseleave", function () { $(this).find(".details").stop(true, true).slideUp(150); });

  // Toggle the selected class and accessible pressed state on each favorite button.
  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    const selected = !$(this).hasClass("selected");
    $(this).toggleClass("selected", selected).attr("aria-pressed", String(selected)).text(selected ? "♥" : "♡");
  });
});
