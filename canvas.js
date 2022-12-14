(function() {

    let canvas = null;
    let ctx = null;
    let canvasWidth = 180;
    let canvasHeight = 160;
    let mouse = {x: 0.0, y: 0.0};
    let box = {x: 0.0, y: 0.0, width: 30, height: 30};
    //animation speed time
    let boxMoveSpeed = 4.0;

    // Called whenever the mouse moves
    window.onmousemove = function(e) {
        if (canvas) {
            // Gets the canvas' offset from the top left of the screen
            const boundingRect = canvas.getBoundingClientRect();

            //Fade in & fade out
            mouse.x = e.clientX - boundingRect.left;
            mouse.y = e.clientY - boundingRect.top;
        }
    }

    // Game loop
    function loop() {
        // Tick (Update game logic)
        box.x += (mouse.x - box.x - box.width * 0.5) / boxMoveSpeed;
        box.y += (mouse.y - box.y - box.height * 0.5) / boxMoveSpeed;

        // Render
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0,0,canvasWidth,canvasHeight);

        ctx.lineWidth = 8;
        ctx.strokeStyle = "black";
        //Line color
        ctx.fillStyle = "darkred";
        ctx.beginPath();
        ctx.rect(box.x,box.y,box.width,box.height);
        ctx.fill();
        ctx.stroke();

        // Handy function that loops this
        // function at 60Hz (60 fps) for me.
        requestAnimationFrame(loop);
    }

    // Called when the page finishes loading
    window.onload = function() {
        canvas = document.getElementById("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx = canvas.getContext("2d");

        loop();
    }

}())
