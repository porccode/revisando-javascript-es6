initAccordeon();

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});