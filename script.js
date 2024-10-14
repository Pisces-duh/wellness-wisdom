// GSAP Animations
window.onload = function() {
    gsap.from("#hero h2", { duration: 1, y: -50, opacity: 0 });
    gsap.from("#hero p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    gsap.from("#explore-btn", { duration: 1, scale: 0.5, opacity: 0, delay: 1 });
};

// Scroll-triggered animations for services
gsap.registerPlugin(ScrollTrigger);

gsap.from(".service", {
    scrollTrigger: ".services-container",
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
});

// Scroll Animations for About Section
gsap.from("#about", {
    scrollTrigger: "#about",
    duration: 1,
    x: -100,
    opacity: 0
});

// Contact Form Submit Event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});
