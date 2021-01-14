var towerImg,tower;
var ghost, ghostImg;
var door, dI,dG;
var climber,cI,cG;
var iG,iGG;
var PlayState=1;
var EndState;
var gamestate=PlayState;

function preload(){
  towerImg = loadImage("tower.png");
  ghostImg = loadImage("ghost-standing.png");
  dI=loadImage("door.png");
  cI=loadImage("climber.png");
}
function setup(){
createCanvas(600,600);
tower = createSprite(300,300);
tower.addImage("tower",towerImg); 
tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  
  
  
  dG = new Group();
  cG = new Group(); 
  iGG = new Group();
  
}
function draw(){
  
  background(0);
  if(gamestate===PlayState){
 
     if(tower.y > 400){
      tower.y = 300;
  }
    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3; } 
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3; } 
    if(keyDown("space")){ ghost.velocityY = -10; } 
    ghost.velocityY = ghost.velocityY + 0.8;
    
    spawndoors();
    
    if(cG.isTouching(ghost)){
      ghost.velocityY=0;
    }
    if(ghost.y>600){
      gamestate=EndState;
    }
  
    drawSprites();
  }
  
 if(gamestate===EndState){
    stroke("yellow"); 
    fill("yellow"); 
    textSize(30); 
    text("Game Over", 230,250)
    
    
  }
}

function spawndoors(){
 
  
  if(frameCount%200===0){
     var door = createSprite(200, -50); 
  var climber = createSprite(200,10); 
  var iG= createSprite(200,15);
    
    door.addImage(dI); 
    climber.addImage(cI);
    
    iG.width=climber.width;
    iG.height=2;
    
    door.x=Math.round(random(120,200));
    
    ghost.depth = door.depth; 
    ghost.depth +=1;

    
     climber.x = door.x;
     iG.x = door.x;
    
    door.velocityY = 1; 
    climber.velocityY = 1; 
    iG.velocityY = 1;
    
    iG.debug=true;
    
    dG.add(door);
    iGG.add(iG);
    cG.add(climber);

  }    

}