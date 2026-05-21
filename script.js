// main.js - Handles Responsive Hamburger Navigation
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            
            // Optional: Animate hamburger icon to an 'X'
            if (navLinks.classList.contains("active")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }
        });
    }
});