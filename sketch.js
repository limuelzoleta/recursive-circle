let x = 0;
let y = 0;
let d = 450;
let r = 0, g = 0, b = 0, alpha = 0;
let colors = ["#fbfbfb", "#68afbb", "#ddbc8f", "#ac636e", "#b1d9e6"];
let goingUp = true;


function setup(){
    createCanvas(innerWidth, innerHeight);
}


function draw(){
    translate(width/2, height/2);
    background(0); 
    stroke('#b1d9e6');  
    strokeWeight(2);
    changeColor(45);
    drawCircle(x, y, d);
}


function drawCircle(x, y, d){
    
    change=frameCount%200;
    movement = sin((change)*0.000125);
    y = y + sin( x * movement ) * 80;
    x = x + sin( y * movement ) * 80;
   

    ellipse(x, y, d);
    if( d > 2){
        drawCircle(x + d * 0.5 , y, d * 0.420);
        drawCircle(x - d * 0.5 , y, d * 0.420);
    }
   
}

function changeColor(rate){ 

    fill(r, g, b, alpha);
    if( alpha < 255 && goingUp){
        r += floor(random(rate));
        g += floor(random(rate));
        b += floor(random(rate));
        alpha += floor(random(rate / 2));
        if(alpha >= 255){
            goingUp = false;
        }
    }  else if(!goingUp){
        r -= floor(random(rate));
        g -= floor(random(rate));
        b -= floor(random(rate));
        alpha -= floor(random(rate / 2));
        if( alpha <= 0 ){
            goingUp = true;
        }
    }
    console.log(goingUp);
}

