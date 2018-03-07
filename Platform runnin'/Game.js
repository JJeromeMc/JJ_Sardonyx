var groundSprite;
var groundSprites;
var firstGroundSprite;
var GROUND_SPRITE_HEIGHT = 75;
var GROUND_SPRITE_WIDTH = 75;
var numGroundSprites;
var Gravity = 0.3;
var player;
var obstacleSprites;
var jump = -5;
var Gameisover;
var score;


function setup(){
    createCanvas(600,500);
    background(150,200,250);
    groundSprites = new Group();
    numGroundSprites = width/GROUND_SPRITE_WIDTH +1;
    for(var n =0; n < numGroundSprites; n++)
    {
        groundSprite = createSprite(n*75, height-32.5, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
    }
    player = createSprite(100, height-108, 75,75);
    obstacleSprites = new Group();
    Gameisover = false;
    score = 0;
}

function draw(){
    background(150,200,250);
    player.velocity.y = player.velocity.y + Gravity;
    player.position.x = player.position.x + 5;
    camera.position.x = player.position.x + (width/4);
    firstGroundSprite = groundSprites[0];
    
    if (firstGroundSprite.position.x <= camera.position.x - (width/1.75)) 
    {
        groundSprites.remove(firstGroundSprite);
        firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
        groundSprites.add(firstGroundSprite);
    }
    
    if (random() > 0.95) 
    {
        var obstacle = createSprite(camera.position.x + width, random(0, (height-75)-15), 30, 30);
        obstacleSprites.add(obstacle);
    }

    var firstObstacle = obstacleSprites[0];
    if (obstacleSprites.lenght > 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firstObstacle.width/2)) 
    {
        removeSprite(firstObstacle);
    }
    
    obstacleSprites.overlap(player,endGame);
    
    drawSprites();
    
    score = score + 0.02;
    textAlign (CENTER);
    text(score,camera.position.x,10);
    
    
    if (groundSprites.overlap(player)) 
    {
      player.velocity.y = 0;
      player.position.y = (height-107.5);
    }
    
    if (keyDown(UP_ARROW))
    {
        player.velocity.y = jump;
    }
    
    if (Gameisover)
    {
        score=score -0.02;
        background(0);
        fill(255);
        textAlign(CENTER);
        text("Your score was: " + score, camera.position.x, camera.position.y - 20);
        text("Get Dunked on!!!    Click anywhere to restart", camera.position.x, camera.position.y);
    }
}

function endGame(){
    Gameisover= true;
}

function mouseClicked(){
    if (Gameisover)
    {
        for (var n = 0; n < numGroundSprites; n++) {
        groundSprite = groundSprites[n];
        groundSprite.position.x = n*75;
        }
        player.position.x = 100;
        player.position.y = height- 108;
        
        obstacleSprites.removeSprites();
        
        score=0;
        
        Gameisover=false;
    }
}