const navbar = `
    <div id="navbar">
        <div id="navbar-logo">Supermarket</div>
        <div id="mobile-toggle">☰</div>
        <div id="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#login">Login</a>
        </div>
    </div>
`

document.addEventListener('DOMContentLoaded', async () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    // Toggle mobile menu
    mobileToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const navbar = document.getElementById('navbar');
        if (!navbar.contains(event.target)) {
            navbarLinks.classList.remove('active');
        }
    });

    // Prevent mobile toggle click from propagating
    mobileToggle.addEventListener('click', (event) => {
        event.stopPropagation();
    });

});

document.body.innerHTML = navbar;