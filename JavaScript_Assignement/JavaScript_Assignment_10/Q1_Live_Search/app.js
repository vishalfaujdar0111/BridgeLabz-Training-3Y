$(function () {
  const API = "http://localhost:3001/products";
  let request = null, debounceTimer = null;

  function renderProducts(products) {
    const $results = $("#results").empty();
    if (!products.length) {
      $("#message").text("No products found.");
      return;
    }
    $("#message").text("");
    products.forEach(product => {
      const $card = $("<article>", { class: "card product" });
      $("<img>", { src: product.image, alt: product.name }).appendTo($card);
      const $info = $("<div>");
      $("<h2>").text(product.name).appendTo($info);
      $("<strong>").text("₹" + Number(product.price).toLocaleString("en-IN")).appendTo($info);
      $card.append($info).appendTo($results);
    });
  }

  // Send GET /products?q=value through jQuery AJAX whenever the search changes.
  function searchProducts() {
    const query = $("#search").val().trim();
    if (request) request.abort();
    $("#loading").prop("hidden", false);
    $("#message").text("");
    request = $.ajax({ url: API, method: "GET", data: { q: query }, dataType: "json" })
      .done(renderProducts)
      .fail((xhr, status) => {
        if (status !== "abort") $("#message").text("Could not load products. Check that JSON Server is running on port 3001.");
      })
      .always(() => $("#loading").prop("hidden", true));
  }
  $("#search").on("input", function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(searchProducts, 180);
  });
  searchProducts();
});
