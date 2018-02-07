var num_circles = 12;
var circleDiam;
var circleRad =circleDiam/2;
var rVal;
var gVal;
var bVal;

function setup(){
    createCanvas(480,600); 
    circleDiam = width/num_circles;
    circleRad =circleDiam/2;
}
function draw(){
    rVal = 255;
    gVal = 0;
    bVal = 0;
    
    var isShifted = false;
    fill (color(rVal,gVal,bVal));
    stroke (color(rVal,gVal,bVal));
    var y= 0;
    while (y<=height){
        
        var x=0;
        if(isShifted){ x=circleRad;}
        else{x=0;}
        
        while(x<=width){
            ellipse(x,y,circleDiam,circleDiam);
            x= x+circleDiam;
            fill (color(rVal,gVal,bVal));
            stroke (color(rVal,gVal,bVal));
        }
        
        y= y + circleRad;
        isShifted = !isShifted;
        
        rVal = rVal - 8;
        gVal = gVal + 2;
        bVal = bVal + 8;
    }
}