const typingElement = document.querySelector('.typing');
const roles = ["CSE Student @ BIT Patna", "Digital Marketing Intern", "Public Speaker", "Tech Enthusiast"];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    typingElement.textContent = isDeleting ? currentRole.substring(0, charIndex - 1) : currentRole.substring(0, charIndex + 1);
    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    let typeSpeed = isDeleting ? 60 : 120;
    if (!isDeleting && charIndex === currentRole.length) { isDeleting = true; typeSpeed = 2000; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; typeSpeed = 500; }
    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typingElement) typeEffect();
    
    // Simple Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .card, .list-item').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});