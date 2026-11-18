// Q2: Live character counter with a 100-character limit.
const messageBox = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
  const remaining = maximumCharacters - messageBox.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
  counter.classList.toggle("danger", remaining === 0);
}

messageBox.addEventListener("input", updateCounter);

// Prevent characters beyond the limit, including pasted text.
messageBox.addEventListener("beforeinput", (event) => {
  const currentLength = messageBox.value.length;
  const selectedLength = messageBox.selectionEnd - messageBox.selectionStart;
  const insertedLength = event.data ? event.data.length : 0;
  const resultingLength = currentLength - selectedLength + insertedLength;

  if (event.inputType.startsWith("insert") && resultingLength > maximumCharacters) {
    event.preventDefault();
  }
});

resetButton.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
  messageBox.focus();
});

updateCounter();
