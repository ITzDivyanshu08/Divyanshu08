const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balls = [];
let butterflies = [];

function createBalls() {
    for (let i = 0; i < 30; i++) {
        balls.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 3,
            dy: (Math.random() - 0.5) * 3,
            radius: 5 + Math.random() * 5
        });
    }
}

function createButterflies() {
    for (let i = 0; i < 4; i++) {
        butterflies.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            path: [],
            index: 0,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`
        });

        for (let j = 0; j < 50; j++) {
            butterflies[i].path.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            });
        }
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach((ball, i) => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) ball.dx *= -1;
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) ball.dy *= -1;

        for (let j = i + 1; j < balls.length; j++) {
            let dx = balls[j].x - ball.x;
            let dy = balls[j].y - ball.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < ball.radius + balls[j].radius) {
                let mergedRadius = Math.min(ball.radius + balls[j].radius, 30);
                ball.radius = mergedRadius;
                balls[j].radius = mergedRadius;
            }
        }

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00f2ff';
        ctx.fill();
        ctx.closePath();
    });

    butterflies.forEach((butterfly) => {
        butterfly.index = (butterfly.index + 1) % butterfly.path.length;
        butterfly.x = butterfly.path[butterfly.index].x;
        butterfly.y = butterfly.path[butterfly.index].y;

        ctx.beginPath();
        ctx.arc(butterfly.x, butterfly.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = butterfly.color;
        ctx.fill();
        ctx.shadowBlur = 20;
        ctx.shadowColor = butterfly.color;
        ctx.closePath();
    });

    requestAnimationFrame(update);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

createBalls();
createButterflies();
update();
