var bgsprite,ladybug;
var coin;


function preload(){
  bg =loadImage("imagefolder/bg7.png");
  bugImg =loadAnimation("imagefolder/lady1.png","imagefolder/lady4.png","imagefolder/lady3.png" );
}




function setup() {
  createCanvas(800,400);
  bgsprite= createSprite(200, 200, 200, 200);
  bgsprite.addImage(bg);
  bgsprite.velocityY=-2;
  ladybug=createSprite(400,200,40,200);
  ladybug.addAnimation("running",bugImg)
}

function draw() {
  background(255,255,255);  
  if(bgsprite.y<50){
  bgsprite.y=100;
  }
  if(keyDown("RIGHT_ARROW")){
    ladybug.x=ladybug.x+2
  }
  if(keyDown("LEFT_ARROW")){
    ladybug.x=ladybug.x-2
  }
  spawncoins();
  drawSprites();
}
function spawncoins(){
  if(frameCount%60=== 0){
    coin=createSprite(random(50,750),0,20,20);
    coin.velocityY=3;
  }
}