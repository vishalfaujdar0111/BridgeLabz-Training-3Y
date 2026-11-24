$(function () {
  let postNumber = 5;
  // Append creates a new post at the end of the list.
  $("#add").on("click", function () {
    postNumber++;
    $("#posts").append('<article class="post"><h3>New Blog Post ' + postNumber + '</h3><p>Fresh content awaiting an author.</p><div class="tags"></div></article>');
  });
  // Prepend inserts the featured article before all existing posts.
  $("#featured").on("click", function () {
    $("#posts").prepend('<article class="post highlight"><h3>Featured: Editor’s Pick</h3><p>Our recommended article of the week.</p><div class="tags"></div></article>');
  });
  // Remove only the last post element.
  $("#remove").on("click", function () { $("#posts").children(".post").last().remove(); });
  // Use before()/after() to place tags around the post content.
  $("#posts").on("click", ".post", function () {
    const $post = $(this);
    if ($post.find(".tag").length) return;
    $post.find("h3").before('<span class="tag">BLOG</span>');
    $post.find("p").after('<span class="tag">EDITORIAL</span>');
  });
  // Highlight posts containing one of the selected keywords.
  $("#posts .post").each(function () {
    const text = $(this).text().toLowerCase();
    if (text.includes("jquery") || text.includes("javascript")) $(this).addClass("highlight");
  });
});
