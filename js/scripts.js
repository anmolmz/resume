/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {
    console.log('%cWelcome to Anmol Mazoo\'s Resume Site!', 'color: #0d6efd; font-size: 16px; font-weight: bold;');

    // ScrollSpy activation
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse navbar
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Section fade-in on scroll
    const sections = document.querySelectorAll('.resume-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // Log active section on scroll
    document.addEventListener('activate.bs.scrollspy', function (event) {
        const activeSection = document.querySelector('.nav-link.active');
        if (activeSection) {
            console.log('Currently viewing section:', activeSection.textContent);
        }
    });
});