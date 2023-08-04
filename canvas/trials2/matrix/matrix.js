const canvas = document.getElementById("matrix");
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;
const fontSize = 16;

const columns = canvas.width/fontSize;

const rainDrops = [];

for (let i=0; i<columns; i++) {
    rainDrops[i] = 1;
    console.log('*', rainDrops[i]);
}

const draw = () => {
    c.fillStyle = 'rgba(0,0,0,0.07)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    c.fillStyle = '#0F0';
    c.font = fontSize + 'px monospace';

    for (let i=0; i<rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        c.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 20);