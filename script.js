const canvas = document.getElementById('animatedBackground');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor(x, y, size, color, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.velocityX = -this.velocityX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.velocityY = -this.velocityY;
        }

        this.draw();
    }
}

function createParticles() {
    particles = [];
    for (let i = 0; i < 200; i++) {
        let size = Math.random() * 5 + 2;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let velocityX = (Math.random() - 0.5) * 2;
        let velocityY = (Math.random() - 0.5) * 2;
        let color = `rgba(0, 255, 255, ${Math.random()})`;
        particles.push(new Particle(x, y, size, color, velocityX, velocityY));
    }
}

function animateParticles() {
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let particle of particles) {
        particle.update();
    }
}

createParticles();
animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
});
