// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function fadeInOnScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    document.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); 
});

// Contact Button Click
document.querySelector(".contact-btn").addEventListener("click", function () {
    alert("Contact me via Email or Discord!");
});
