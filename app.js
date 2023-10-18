const log = console.log;

const toggleTheme = document.querySelector("#toggle-theme");

let userSetThemePreference = localStorage.getItem("userSetDarkThemeOn");
log(userSetThemePreference);

const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

/* if (userSetThemePreference === true) {
  document.documentElement.classList.add("dark-theme");
} else if (!userSetThemePreference) {
  document.documentElement.classList.remove("dark-theme");
} else if (prefersDark) {
  document.documentElement.classList.add("dark-theme");
} */

toggleTheme.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark-theme")) {
    localStorage.setItem("userSetDarkThemeOn", false);
  } else {
    localStorage.setItem("userSetDarkThemeOn", true);
  }

  document.documentElement.classList.toggle("dark-theme");
  userSetThemePreference = localStorage.getItem("userSetDarkThemeOn");

  log("user set theme:", userSetThemePreference);
  log("user prefers dark", prefersDark);
});
