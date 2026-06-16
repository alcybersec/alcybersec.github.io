/**
 * alcybersec.github.io — Main JavaScript (terminal theme)
 * Header scroll state, mobile nav, and contact-form handling.
 */

document.addEventListener('DOMContentLoaded', function () {
    initScrollEffects();
    initMobileNav();
});

/* Header gets a subtle border when the page is scrolled. */
function initScrollEffects() {
    var header = document.querySelector('header');
    if (!header) return;
    var onScroll = function () {
        if (window.scrollY > 20) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* Mobile slide-in navigation. */
function initMobileNav() {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('nav');
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('nav ul li a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

/* Contact form (simulated submit). */
function handleFormSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var submitBtn = form.querySelector('button[type="submit"]');
    var formStatus = form.querySelector('.form-status');

    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Sending...'; }

    setTimeout(function () {
        if (formStatus) {
            formStatus.innerHTML = '<div class="success-message">Your message has been sent successfully!</div>';
            formStatus.style.display = 'block';
        }
        form.reset();
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Send Message'; }
        setTimeout(function () { if (formStatus) formStatus.style.display = 'none'; }, 5000);
    }, 1200);
}

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contact-form');
    if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);
});
