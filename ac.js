function preload(){
    img=loadImage('ac.webp')
}

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 500, 500);
    fill('red');
    text('AC', 110, 110)
    noFill();
    stroke('red')
    rect(30, 50, 500, 400)
}