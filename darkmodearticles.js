const toggleThemeButton = document.getElementById("theme");
const body = document.body;

toggleThemeButton.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
  }
});
