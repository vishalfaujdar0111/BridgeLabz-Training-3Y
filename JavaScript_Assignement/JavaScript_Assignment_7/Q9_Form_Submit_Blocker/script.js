// Q9: Block invalid form submission and display live inline errors.
const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

const errorFields = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  password: document.getElementById("passwordError")
};

function validateField(fieldName) {
  let message = "";
  if (fieldName === "name" && !nameInput.value.trim()) {
    message = "Name is required.";
  } else if (fieldName === "email") {
    const emailValue = emailInput.value.trim();
    if (!emailValue) message = "Email is required.";
    else if (!emailValue.includes("@")) message = "Email must contain @.";
  } else if (fieldName === "password" && passwordInput.value.length < 6) {
    message = "Password must be at least 6 characters.";
  }

  errorFields[fieldName].textContent = message;
  return message === "";
}

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop the browser's default form submission.

  const nameValid = validateField("name");
  const emailValid = validateField("email");
  const passwordValid = validateField("password");

  if (nameValid && emailValid && passwordValid) {
    successMessage.hidden = false;
    registrationForm.reset();
  } else {
    successMessage.hidden = true;
  }
});

// Revalidate fields while the user types so corrected errors disappear.
nameInput.addEventListener("input", () => validateField("name"));
emailInput.addEventListener("input", () => validateField("email"));
passwordInput.addEventListener("input", () => validateField("password"));
