document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');
  
    // Check for saved theme preference or default to light theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.classList.toggle('dark-theme', currentTheme === 'dark');
    updateIcon(currentTheme === 'dark');
  
    themeToggle.addEventListener('click', () => {
      html.classList.toggle('dark-theme');
      const isDarkTheme = html.classList.contains('dark-theme');
      localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
      updateIcon(isDarkTheme);
    });
  
    function updateIcon(isDarkTheme) {
      icon.classList.remove(isDarkTheme ? 'fa-moon' : 'fa-sun');
      icon.classList.add(isDarkTheme ? 'fa-sun' : 'fa-moon');
    }
  });