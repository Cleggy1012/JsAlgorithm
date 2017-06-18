var n = 0;
var c = 4;


function setup(){
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);
}
function draw(){
    var a = n * document.getElementById('degree').value;
    var r = document.getElementById('c').value * sqrt(n);

    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + height / 2;
    fill(n % 256, 255, 255);
    noStroke();

    var size = n % 5;
    ellipse(x,y,size,size);

    n++;

}
function restart(){
    background(0);
    n = 0;
}

function Color() {
    this.calculate = function(){

    }

    this.getCalculation = function(){



    }
}