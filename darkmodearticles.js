document.addEventListener("DOMContentLoaded", () => {
  const switchToggle = document.getElementById("theme");
  const themeLink = document.getElementById("theme-link");

  const applyTheme = () => {
    const isDarkMode = switchToggle.checked;
    themeLink.href = isDarkMode ? "./darkmodestyles.css" : "./styles.css";
    document.body.classList.toggle('dark-mode', isDarkMode);
  };

  // Add a class to disable transitions initially
  document.body.classList.add('no-transition');

  // Initialize theme based on localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    switchToggle.checked = savedTheme === 'dark';
    applyTheme();
  }

  // Remove the class to enable transitions after initial load
  window.addEventListener('load', () => {
    document.body.classList.remove('no-transition');
  });

  switchToggle.addEventListener("change", () => {
    applyTheme();
    localStorage.setItem('theme', switchToggle.checked ? 'dark' : 'light');
  });
});
