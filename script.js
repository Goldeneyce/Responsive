document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav'); // Corrected selector

    if (hamburgerMenu && mainNav) { // Basic check to ensure elements exist
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active'); // For the icon animation
        });

        // Optional: Close menu when a link is clicked (useful for single-page sites)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                }
            });
        });
    }
});
