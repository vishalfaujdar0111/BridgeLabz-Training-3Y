// Shared helpers: keep each question's logic in its own JavaScript file.
window.assignmentRunners = {};

window.showOutput = function (questionId, lines) {
  const outputElement = document.getElementById(`out-${questionId}`);
  outputElement.textContent = Array.isArray(lines) ? lines.join("\n") : String(lines);
};

window.wait = function (milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
