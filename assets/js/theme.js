const themeToggle = document.querySelector("#theme-toggle");
const themeStorageKey = "gweb-theme";
const root = document.documentElement;

function setTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
}

if (themeToggle instanceof HTMLButtonElement) {
  let savedTheme = "light";

  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    if (storedTheme === "light" || storedTheme === "dark") {
      savedTheme = storedTheme;
    }
  } catch (error) {
    console.warn("Unable to load the saved theme preference.", error);
  }

  setTheme(savedTheme);
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
      console.warn("Unable to save the theme preference.", error);
    }
  });
  themeToggle.hidden = false;
}
