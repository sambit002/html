window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    /**
     * we need to have a context obj 
     * to draw on canvas
     */

    // we make a 2d context
    const c = canvas.getContext("2d");

    /**
     * drawing rectangles with different color
     * rectangles which are not filled with color
     * they only have colored perimeter
     */
    // c.strokeStyle = "blue";
    // c.strokeRect(50, 50, 200, 400);
    // c.strokeStyle = "tomato";
    // c.strokeRect(150, 150, 200, 200);
    // c.strokeStyle = "green";
    // c.strokeRect(200, 200, 200, 200);

    /**
     * let us making a drawing app
     */

    let painting = false;
    
    function startPosition() {
        painting = true;
    }

    function endPosition(event) {
        c.beginPath();
        painting = false;
    }

    function lineColor() {
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);
        return `rgba(${a}, ${b}, ${c}, 1)`
    }

    function draw(e) {
        if (!painting) return;
        c.lineWidth = 10;
        c.strokeStyle = lineColor();
        c.lineCap = "round";
        // c.lineTo(e.offsetX, e.offsetY);
        c.lineTo(e.clientX, e.clientY);
        c.stroke();
    }
    
    window.addEventListener('mousedown', startPosition);
    window.addEventListener('mouseup', endPosition);
    window.addEventListener('mousemove', draw);
});

// window.addEventListener("resize", resize());

// const resize = () => {
//     const canvas = document.getElementById("canvas");
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// }