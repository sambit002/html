
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//creating a context
let c = canvas.getContext('2d');


/**
 * creating multiple balls using OO JS
 */

function Ball(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "purple";
        c.stroke();
        c.fill();
    }
    this.bounce = () => {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        // this.draw();
    }
}

let ballArr = [];

for (let i = 0; i < 100; i++) {
    let x = Math.random() * innerWidth + 10;
    let y = Math.random() * innerHeight + 10;
    let dx = (Math.random() - 0.5);//x velocity
    let dy = (Math.random() - 0.5); // y velocity
    // let dx = 7;
    // let dy = 7;
    let radius = 25;
    ballArr.push(new Ball(x, y, radius, dx, dy));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < ballArr.length; i++) {
        ballArr[i].draw();
        ballArr[i].bounce();
    }
}

animate();