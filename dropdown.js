document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  toggle.addEventListener('click', function() {
    const isActive = nav.classList.contains('active');

    if (isActive) {
      // Closing the menu
      nav.style.maxHeight = nav.scrollHeight + 'px'; // Set to the current content height
      // Force reflow to apply transition
      setTimeout(() => {
        nav.style.maxHeight = '0'; // Transition to 0 height
      }, 0);
      nav.classList.remove('active');
      toggle.classList.remove('active');
    } else {
      // Opening the menu
      nav.classList.add('active');
      // Force reflow to apply transition
      nav.style.maxHeight = 'none'; // Reset max-height
      nav.offsetHeight; // Trigger reflow
      nav.style.maxHeight = nav.scrollHeight + 'px'; // Set to the content height
      toggle.classList.add('active');
    }
  });
});
