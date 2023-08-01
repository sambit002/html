const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//creating a context
let c = canvas.getContext('2d');


/**create an arc/circle */
// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "purple";
// c.stroke();

/**animate function */
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 5;//x velocity
// let dy = (Math.random() - 0.5) * 5; // y velocity
let dx = 5;
let dy = 5;
let radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fillStyle = "purple";
    c.fill();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x+=dx;
    y+=dy;
}

/** calling the function */
animate();