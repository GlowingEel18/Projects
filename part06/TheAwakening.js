document.getElementById('reveal-fact').addEventListener('click', function() {
    var fact = document.getElementById('fact');
    if (fact.classList.contains('hidden')) {
        fact.classList.remove('hidden');
        this.textContent = 'Hide Fun Fact';
    } else {
        fact.classList.add('hidden');
        this.textContent = 'Reveal a Fun Fact';
    }
});

// JavaScript to handle the hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navbar.classList.toggle('active');
    });
});
