document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.className = savedTheme;
    } else {
        // Check if user prefers dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.className = 'dark-theme';
        }
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.className = 'dark-theme';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.className = 'light-theme';
            localStorage.setItem('theme', 'light-theme');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});
