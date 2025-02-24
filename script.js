document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 150; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 5 + 2}s`;
        starsContainer.appendChild(star);
    }
});

const buttons = document.querySelectorAll('.futuristic-button');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        button.style.background = `radial-gradient(circle at ${x}px ${y}px, #0044cc, #001f4d)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.background = 'linear-gradient(135deg, #001f4d, #003366)';
    });
});
