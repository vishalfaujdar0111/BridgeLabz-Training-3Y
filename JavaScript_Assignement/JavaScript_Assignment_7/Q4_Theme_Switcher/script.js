// Q4: Theme switching using setAttribute() for all theme changes.
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const themeStatus = document.getElementById("currentTheme");
const allowedThemes = ["light", "dark", "blue"];

function applyTheme(theme) {
  if (!allowedThemes.includes(theme)) return;
  // setAttribute stores the selected theme as a custom data attribute.
  document.body.setAttribute("data-theme", theme);
  themeStatus.textContent = `Current theme: ${theme.charAt(0).toUpperCase()}${theme.slice(1)}`;
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-choice"));
  });
});

// Restore the initial theme using the attribute already on the body.
applyTheme(document.body.getAttribute("data-theme") || "light");
