function togglemenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Check localStorage for dark mode preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    }
  });
});
