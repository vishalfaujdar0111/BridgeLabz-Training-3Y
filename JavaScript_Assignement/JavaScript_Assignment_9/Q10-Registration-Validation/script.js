$(function () {
  // Demo data: in a real application, email uniqueness must be checked by the server.
  const registeredEmails = ["admin@example.com", "student@example.com"];
  function setInvalid($field, invalid) {
    // Use .css() as requested to apply a visible red border to invalid fields.
    $field.toggleClass("error", invalid).css("border-color", invalid ? "#c62828" : "");
  }
  $("#registration").on("submit", function (event) {
    event.preventDefault();
    const $name = $("#name"), $email = $("#email"), $password = $("#password");
    const name = $name.val().trim(), email = $email.val().trim();
    const password = $password.val();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const unique = !registeredEmails.includes(email.toLowerCase());
    const checks = [
      [ $name, name.length === 0 ],
      [ $email, !emailValid || !unique ],
      [ $password, password.length < 8 ]
    ];
    checks.forEach(function (item) { setInvalid(item[0], item[1]); });
    if (checks.some(function (item) { return item[1]; })) {
      let message = "Please correct the highlighted fields.";
      if (emailValid && !unique) message = "That email address is already registered.";
      $("#form-message").removeClass("success").css("color", "#c62828").text(message);
      return;
    }
    $("#form-message").addClass("success").css("color", "").text("Registration successful! Your details passed the client-side checks.");
    // Add the address to this page's demo uniqueness list after successful validation.
    registeredEmails.push(email.toLowerCase());
    this.reset();
    $(".error").removeClass("error").css("border-color", "");
  });
  // Clear a field's invalid style as the user edits it; submit performs full validation.
  $("input").on("input", function () { setInvalid($(this), false); });
});
