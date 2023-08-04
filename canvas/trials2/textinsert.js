const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let char = ".";
let points = [];
let reversePoints = [];

for (let i=0; i<100; i++) {
    points[i] = 1;
}

for(let i = 0; i < 100; i++) {
    reversePoints[i] = 100;
}

let space = 16;

const draw = () => {
    c.fillStyle = 'rgba(0,0,0,0.05)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = '#fff';
    // c.fillText(char, a , b);
    for (let i=0; i < points.length; i++) {
        c.fillText(char, i * space , points[i] * space);
        if(points[i] * space > canvas.height && Math.random() > 0.975) {
            points[i] = 0;
        }
        points[i]++;
    }
    
}

// const drawReverse = () => {
//     c.fillStyle = 'rgba(0,0,0,0.05)';
//     c.fillRect(0, 0, canvas.width, canvas.height);
//     c.fillStyle = '#fff';
//     // c.fillText(char, a , b);
//     for (let i=points.length; i >=0; i--) {
//         c.fillText(char, i * space , points[i] * space);
//         if(points[i] * space < 0 && Math.random() > 0.975) {
//             points[i] = 0;
//         }
//         points[i]--;
//     }
    
// }

setInterval(draw, 25);