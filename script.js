document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Reveal Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Create the observer
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after first animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });

    // Observe each element
    fadeElements.forEach(el => scrollObserver.observe(el));


    // 2. Setup tsParticles for subtle tech background dust
    // The design is very clean, so particles should be minimal
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            particles: {
                color: { value: ["#FF4B5C", "#00E5FF", "#ffffff"] },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "out" },
                    random: true,
                    speed: 0.3,
                    straight: false,
                },
                number: {
                    density: { enable: true, area: 800 },
                    value: 25, // very light dust
                },
                opacity: { 
                    value: { min: 0.1, max: 0.3 },
                    random: true 
                },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 2 }, random: true },
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" }
                },
                modes: {
                    grab: { distance: 150, links: { opacity: 0.2 } }
                }
            },
            detectRetina: true,
        });
    }

    // 3. Optional: Mobile menu handling if needed in future
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // Placeholder logic 
            console.log("Mobile menu clicked");
        });
    }
});
