function preload(){
    img=loadImage('tv.avif')
}

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 500, 500);
    fill('red');
    text('Tv', 110, 110)
    noFill();
    stroke('red')
    rect(90, 90, 300, 300)
}