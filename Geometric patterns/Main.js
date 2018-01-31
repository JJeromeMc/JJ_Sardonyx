var num_circles = 12;
var circleDiam;

function setup(){
    createCanvas(480,600); 
    circleDiam = width/num_circles;
}
function draw(){
    var y=0;
    while (y<=height){
        var x=0;
        while(x<=width){
            x= x+circleDiam;
            ellipse(x,y,circleDiam,circleDiam);
        }
        y= y +circleDiam;
    }
}