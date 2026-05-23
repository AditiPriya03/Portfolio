/*
========================================
    Portfolio Website Interactions
========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       Typing Animation
    ======================================== */

    const typingText = document.querySelector(".typing");

    const roles = [
        "CSE Student @ BIT Patna",
        "DSA Enthusiast in Java",
        "AI & Intelligent Systems Learner",
        "Java Developer"
    ];

    let currentRole = 0;
    let currentChar = 0;

    let deleting = false;
    let typingDelay = 120;

    function startTypingEffect() {

        if (!typingText) return;

        const selectedRole = roles[currentRole];

        // Typing text
        if (!deleting) {

            typingText.textContent =
                selectedRole.substring(0, currentChar + 1);

            currentChar++;

            typingDelay = 120;
        }

        // Deleting text
        else {

            typingText.textContent =
                selectedRole.substring(0, currentChar - 1);

            currentChar--;

            typingDelay = 60;
        }

        // Pause after completing word
        if (!deleting && currentChar === selectedRole.length) {

            deleting = true;
            typingDelay = 1800;
        }

        // Move to next role
        else if (deleting && currentChar === 0) {

            deleting = false;

            currentRole =
                (currentRole + 1) % roles.length;

            typingDelay = 500;
        }

        setTimeout(startTypingEffect, typingDelay);
    }

    startTypingEffect();


    /* ========================================
       Scroll Reveal Animation
    ======================================== */

    const animatedItems = document.querySelectorAll(
        ".project-card, .experience-card, .skill-box, .achievement-item"
    );

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }
        });

    }, observerOptions);

    animatedItems.forEach((item) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        revealOnScroll.observe(item);
    });


    /* ========================================
       Navbar Effect While Scrolling
    ======================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(0, 0, 0, 0.95)";

            navbar.classList.add("shadow");
        }

        else {

            navbar.style.background =
                "rgba(0, 0, 0, 0.75)";

            navbar.classList.remove("shadow");
        }
    });


    /* ========================================
       Smooth Navigation Scroll
    ======================================== */

    const navLinks =
        document.querySelectorAll('a[href^="#"]');

    navLinks.forEach((link) => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const sectionId =
                this.getAttribute("href");

            const targetSection =
                document.querySelector(sectionId);

            if (!targetSection) return;

            window.scrollTo({
                top: targetSection.offsetTop - 75,
                behavior: "smooth"
            });
        });
    });

});
