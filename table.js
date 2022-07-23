function preload(){
    img=loadImage('table.jpg')
}

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 500, 500);
    fill('red');
    text('Table', 50, 50)
    noFill();
    stroke('red')
    rect(40, 40, 400, 400)
}