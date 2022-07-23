function preload(){
    img=loadImage('bed.jpg')
}

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 500, 500);
    fill('red');
    text('Bed', 110, 110)
    noFill();
    stroke('red')
    rect(30, 90, 400, 300)
}