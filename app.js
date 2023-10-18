const log = console.log;

const toggleTheme = document.querySelector("#toggle-theme");

toggleTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (prefersDark) {
  document.documentElement.classList.add("dark-theme");
}
