const log = console.log;
const toggleTheme = document.querySelector("#toggle-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

let userSetThemePreference = JSON.parse(
  localStorage.getItem("userSetDarkThemeOn")
);

if (userSetThemePreference) {
  document.documentElement.classList.add("dark-theme");
} else if (userSetThemePreference === false) {
  document.documentElement.classList.remove("dark-theme");
} else if (prefersDark) {
  document.documentElement.classList.add("dark-theme");
}

toggleTheme.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark-theme")) {
    localStorage.setItem("userSetDarkThemeOn", false);
  } else {
    localStorage.setItem("userSetDarkThemeOn", true);
  }

  document.documentElement.classList.toggle("dark-theme");
  userSetThemePreference = localStorage.getItem("userSetDarkThemeOn");
});
