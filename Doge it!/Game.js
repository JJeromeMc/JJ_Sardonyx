var player;
var playerimage;
var enemy;
var enemyimage;
var gameisover;

function preload(){
    playerimage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyimage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
    
}

function setup(){
    gameisover= false;
    createCanvas(256,256);
    player = createSprite(width/2, height-(playerimage.height/2), 0, 0);
    player.addImage(playerimage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyimage);
    enemy.rotationSpeed = 5;
}

function draw(){
    if(gameisover){
        gameOver();
    }else{
    if(enemy.overlap(player)){
        gameisover = true;
    }
    background(backgroundImage);
    drawSprites()
    
    if(keyDown(RIGHT_ARROW) && player.position.x < width-25){
        player.position.x = player.position.x +2;
    }
    if(keyDown(LEFT_ARROW) && player.position.x > 25){
        player.position.x = player.position.x -2;
    }
    enemy.position.y = enemy.position.y +4;
    if(enemy.position.y > height+30){
        enemy.position.y = -30;
        enemy.position.x = random(5,width-5);
    }
    }
}

function gameOver(){
    background(25,0,0);
    textAlign(CENTER);
    fill("red");
    text("Get Dunked On!", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/4)
}
function mouseClicked(){
    if(gameisover){
        gameisover = false;
        player.position.x = width/2;
        player.position.y = height-(playerimage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = 0;
    }
}