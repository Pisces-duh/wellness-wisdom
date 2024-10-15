// GSAP Animations
window.onload = function() {
    // Hero Section Animations
    gsap.from("#hero h2", { duration: 1.5, y: -100, opacity: 0, ease: "power2.out" });
    gsap.from("#hero p", { duration: 1.5, y: 100, opacity: 0, delay: 0.5, ease: "power2.out" });
    gsap.from("#explore-btn", { duration: 1, scale: 0.5, opacity: 0, delay: 1, ease: "bounce.out" });

    // Scroll-triggered animations
    gsap.registerPlugin(ScrollTrigger);

    // About Section
    gsap.from("#about", {
        scrollTrigger: "#about",
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power2.out"
    });

    // Services Section Animations
    gsap.from(".service", {
        scrollTrigger: ".services-container",
        y: 200,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out"
    });

    // Blog Post Animations
    gsap.from(".blog-post", {
        scrollTrigger: ".blog-post",
        y: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    });
};
