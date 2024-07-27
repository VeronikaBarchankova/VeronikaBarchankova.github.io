document.addEventListener("DOMContentLoaded", () => {
  const switchToggle = document.getElementById("theme");
  const themeLink = document.getElementById("theme-link");

  const applyTheme = () => {
    const isDarkMode = switchToggle.checked;
    themeLink.href = isDarkMode ? "./darkmodebandaid.css" : "./bandaid.css";
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.remove('no-transition');
  };

  // Initialize theme based on localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    switchToggle.checked = savedTheme === 'dark';
    applyTheme();
  }

  // Ensure that the body is visible once theme is applied
  /*window.addEventListener('load', () => {
    document.body.classList.remove('no-transition');
  });*/


  switchToggle.addEventListener("change", () => {
    applyTheme();
    localStorage.setItem('theme', switchToggle.checked ? 'dark' : 'light');
  });
});
