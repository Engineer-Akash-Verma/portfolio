document.addEventListener('DOMContentLoaded', () => {
  // Initialize Typed.js for the funny hero text if it exists
  const typedElement = document.getElementById('typed-text-funny');
  if (typedElement && typeof Typed !== 'undefined') {
    // Clear the existing text so Typed can take over
    typedElement.textContent = '';
    
    new Typed('#typed-text-funny', {
      strings: [
        'Professional StackOverflow Copy-Paster',
        'Senior Google Searcher',
        'Expert in Ctrl+C / Ctrl+V',
        'YAML Indentation Specialist',
        'AI Prompt Engineer (I ask AI to code)'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      cursorChar: '|'
    });
  }
});
