// Toggle navigation menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll animation for text on page load
window.addEventListener('load', () => {
    const animateText = document.querySelectorAll('.animate-text');
    animateText.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 300); // delay each element's animation
    });
});

// Reveal animations on scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
});
