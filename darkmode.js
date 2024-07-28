const toggleThemeButton = document.getElementById("theme");
const body = document.body;

// Function to set the theme based on local storage or default to light theme
function setThemeFromLocalStorage() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
      toggleThemeButton.checked = true;
    }
  } else {
    body.classList.add('light-theme');
  }
}

// Function to toggle theme and save it to local storage
function toggleTheme() {
  if (toggleThemeButton.checked) {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

// Set the theme when the page loads
setThemeFromLocalStorage();

// Add event listener to the button
toggleThemeButton.addEventListener('change', toggleTheme);
