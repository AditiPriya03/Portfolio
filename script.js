/**
 * Aditi Priya Portfolio - Professional Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Typing Effect Logic ---
    const typingElement = document.querySelector('.typing');
    const roles = [
        "CSE Student @ BIT Patna", 
        "Digital Marketing Intern", 
        "Head of Design & Decor", 
        "Python Developer"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 60;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 120;
        }

        // Logic for pausing at the end of word and switching
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause when word is complete
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (typingElement) typeEffect();

    // --- 2. Scroll Reveal Animation ---
    // Sections will slide up smoothly as you scroll down
    const revealElements = document.querySelectorAll('.project-card, .experience-card, .skill-box, .achievement-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        revealObserver.observe(el);
    });

    // --- 3. Navbar Background Toggle on Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 0, 0.95)";
            navbar.classList.add('shadow');
        } else {
            navbar.style.background = "#000";
            navbar.classList.remove('shadow');
        }
    });

    // --- 4. Smooth Anchor Link Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 75,
                    behavior: 'smooth'
                });
            }
        });
    });
});
