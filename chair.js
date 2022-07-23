function preload(){
    img=loadImage('chair.jpg')
}

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 500, 500);
    fill('red');
    text('Chair', 110, 110)
    noFill();
    stroke('red')
    rect(100, 20, 300, 400)
}