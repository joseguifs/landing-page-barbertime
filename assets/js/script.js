const menuButton = document.getElementById('menuButton');
const navbar = document.querySelector('.navbar');

if (menuButton && navbar) {
    menuButton.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navbar.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navbar.classList.remove('is-open');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.04}s`;
        observer.observe(item);
    });
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}
