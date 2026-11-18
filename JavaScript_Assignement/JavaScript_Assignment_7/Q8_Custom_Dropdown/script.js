// Q8: Custom dropdown without using a <select> element.
// The document capturing listener closes it when the user clicks outside.
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const selection = document.getElementById("selection");

function setDropdownOpen(isOpen) {
  dropdownOptions.hidden = !isOpen;
  dropdownButton.setAttribute("aria-expanded", String(isOpen));
}

dropdownButton.addEventListener("click", () => {
  setDropdownOpen(dropdownOptions.hidden);
});

dropdownOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest("button[data-value]");
  if (!optionButton) return;

  const selectedValue = optionButton.dataset.value;
  dropdownButton.textContent = `${selectedValue} ▾`;
  selection.textContent = `Selected course: ${selectedValue}`;
  setDropdownOpen(false);
});

// Use the capturing phase (third argument true) for outside-click handling.
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    setDropdownOpen(false);
  }
}, true);
