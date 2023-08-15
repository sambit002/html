const canvas = document.getElementById("flower");
const c = canvas.getContext("2d");

//setting width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 0;

//drawing
function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight);
    size++;
    c.fillStyle = "red";
    c.strokeStyle = "blue";
    c.lineWidth = 5;
    c.beginPath();
    c.arc(100, 100, size, 0, Math.PI * 2);
    c.closePath;
    c.fill();
    c.stroke();
    if (size === 100) {
        size = 0;
    }
    requestAnimationFrame(animate);
}

animate();