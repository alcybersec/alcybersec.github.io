/**
 * Portfolio Website - Main JavaScript
 * Handles animations, interactions, and dynamic content
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initParticles();
    initTypewriter();
    initScrollEffects();
    initMobileNav();
});

/**
 * Initialize particles.js background
 */
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#0077ff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#0077ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

/**
 * Initialize typewriter effect
 */
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter-text');
    if (!typewriterElement) return;

    const phrases = [
        'Cybersecurity Specialist',
        'Python Developer',
        'C++ Programmer',
        'Web Developer',
        'Privacy Advocate'
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            // Deleting text
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            // Typing text
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }

        // If completed typing the current phrase
        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at the end
        } 
        // If completed deleting the current phrase
        else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing the next phrase
        }

        setTimeout(type, typingSpeed);
    }

    // Start the typewriter effect
    setTimeout(type, 1000);
}

/**
 * Initialize scroll effects
 */
function initScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Initialize GSAP ScrollTrigger if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Skill cards animation
        gsap.utils.toArray('.skill-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2
            });
        });

        // Article cards animation
        gsap.utils.toArray('.article-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2
            });
        });
    }
}

/**
 * Initialize mobile navigation
 */
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

/**
 * Handle form submission
 * @param {Event} e - Form submit event
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form elements
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const formStatus = form.querySelector('.form-status');
    
    // Disable submit button and show loading state
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
    }
    
    // Simulate form submission (replace with actual form submission logic)
    setTimeout(() => {
        // Show success message
        if (formStatus) {
            formStatus.innerHTML = '<div class="success-message">Your message has been sent successfully!</div>';
            formStatus.style.display = 'block';
        }
        
        // Reset form
        form.reset();
        
        // Reset button
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            if (formStatus) {
                formStatus.style.display = 'none';
            }
        }, 5000);
    }, 1500);
}

// Add event listener to contact form if it exists
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});
