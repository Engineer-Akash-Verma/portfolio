(function() {
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // White in day (6 AM to 6 PM), Dark at night
    const hour = new Date().getHours();
    const isDayTime = hour >= 6 && hour < 18;
    return isDayTime ? 'light' : 'dark';
  };

  const setTheme = (theme) => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
    
    // Update toggle switch states
    document.querySelectorAll('.theme-toggle-checkbox').forEach(checkbox => {
      checkbox.checked = theme === 'light';
    });
  };

  // Set initial theme immediately to prevent FOUC
  setTheme(getPreferredTheme());

  // Wait for DOM to load to attach event listeners
  window.addEventListener('DOMContentLoaded', () => {
    // Re-apply to make sure icons are updated once DOM is ready
    setTheme(getPreferredTheme());

    document.querySelectorAll('.theme-toggle-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        setTheme(e.target.checked ? 'light' : 'dark');
      });
    });
  });
})();
