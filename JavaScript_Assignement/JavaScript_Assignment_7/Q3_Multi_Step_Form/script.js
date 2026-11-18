// Q3: Three-step form with validation and a final summary.
const steps = [...document.querySelectorAll(".step")];
const stepLabel = document.getElementById("stepLabel");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");
const form = document.getElementById("multiStepForm");
let currentStep = 0;

const fields = [
  document.getElementById("fullName"),
  document.getElementById("email"),
  document.getElementById("password")
];
const stepNames = ["Name", "Email", "Password"];
const errorElements = [
  document.getElementById("nameError"),
  document.getElementById("emailError"),
  document.getElementById("passwordError")
];

function validateCurrentStep() {
  const field = fields[currentStep];
  const value = field.value.trim();
  let message = "";

  if (!value) message = "This field is required.";
  else if (currentStep === 1 && !field.checkValidity()) message = "Enter a valid email address.";
  else if (currentStep === 2 && value.length < 6) message = "Password must contain at least 6 characters.";

  errorElements[currentStep].textContent = message;
  return message === "";
}

function showStep(index) {
  currentStep = index;
  steps.forEach((step, stepIndex) => {
    step.hidden = stepIndex !== currentStep;
    step.classList.toggle("active", stepIndex === currentStep);
  });
  stepLabel.textContent = `Step ${currentStep + 1} of 3: ${stepNames[currentStep]}`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === 2 ? "Finish" : "Next";
  fields[currentStep].focus();
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStep < 2) {
    showStep(currentStep + 1);
  } else {
    form.hidden = true;
    stepLabel.hidden = true;
    summary.hidden = false;
    document.getElementById("summaryName").textContent = `Name: ${fields[0].value.trim()}`;
    document.getElementById("summaryEmail").textContent = `Email: ${fields[1].value.trim()}`;
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) showStep(currentStep - 1);
});

// Clear a step's error as soon as the user corrects its input.
fields.forEach((field, index) => {
  field.addEventListener("input", () => { errorElements[index].textContent = ""; });
});

document.getElementById("startAgain").addEventListener("click", () => {
  form.reset();
  fields.forEach((field, index) => { errorElements[index].textContent = ""; });
  form.hidden = false;
  stepLabel.hidden = false;
  summary.hidden = true;
  showStep(0);
});

form.addEventListener("submit", (event) => event.preventDefault());
showStep(0);
