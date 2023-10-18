const log = console.log;

const toggleTheme = document.querySelector("#toggle-theme");

toggleTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});
