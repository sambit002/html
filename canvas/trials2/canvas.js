const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//creating a context
let c = canvas.getContext('2d');
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(250, 200, 100, 100);

c.fillStyle = 'rgba(255, 0, 0, 0.5)'; //adding color to rects
c.fillRect(400, 200, 100, 100);
c.fillRect(250, 350, 100, 100);
c.fillRect(400, 350, 100, 100);

/**line drawing */
c.beginPath();
c.moveTo(50, 50);
c.lineTo(350, 50);
c.strokeStyle = 'brown';
c.stroke();

/**arc / or / circle */
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

/** drawing circles with loop */
for (let i = 0; i < 2000; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();    
}