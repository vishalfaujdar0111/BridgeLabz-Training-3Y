document.addEventListener("DOMContentLoaded", function () {
  const API = "http://localhost:3006/users";
  const form = document.getElementById("register-form");
  const message = document.getElementById("message");
  const submit = document.getElementById("submit");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const course = document.getElementById("course").value.trim();
    if (!name || !email || !course) return;

    submit.disabled = true;
    message.className = "";
    message.textContent = "Checking email…";
    try {
      // GET first: do not POST if the email is already present.
      const check = await axios.get(API, { params: { email } });
      if (check.data.length > 0) {
        message.className = "message error";
        message.textContent = "Email already registered.";
        return;
      }

      // Only a new email reaches the POST request.
      await axios.post(API, { name, email, course });
      message.className = "message success";
      message.textContent = "Registration successful!";
      form.reset();
    } catch (error) {
      message.className = "message error";
      message.textContent = "Registration could not be completed. Check JSON Server on port 3006.";
    } finally {
      submit.disabled = false;
    }
  });
});
