document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth"
        });
    }
});