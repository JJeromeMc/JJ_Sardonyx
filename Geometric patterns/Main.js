var num_circles = 12;
var circleDiam;
var circleRad =circleDiam/2;

function setup(){
    createCanvas(480,600); 
    circleDiam = width/num_circles;
    circleRad =circleDiam/2;
}
function draw(){
    var isShifted = false;
    
    var y=0;
    while (y<=height){
        
        var x=0;
        if(isShifted){ x=circleRad;}
        else{x=0;}
        
        while(x<=width){
            ellipse(x,y,circleDiam,circleDiam);
            x= x+circleDiam;
        }
        
        y= y +circleRad;
        isShifted = !isShifted;
    }
}