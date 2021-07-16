var astranaut,bathImage,astranaut_sleeping,astranaut_brushing;
var astranaut_eating,astranaut_gym,astranaut_moving,astranaut_drinking,bgimg;



function preload() {
  bathImage = loadImage("images/images/bath1.png","images/images/bath2.png");
  astranaut_sleeping = loadAnimation("images/images/sleep.png");
  astranaut_brushing = loadAnimation("images/images/brush.png");
  astranaut_drinking = loadAnimation("images/images/drink1.png","images/images/drink2.png");
  astranaut_eating = loadAnimation("images/images/eat1.png","images/images/eat2.png");
  astranaut_gym = loadAnimation("images/images/gym1.png","images/images/gym2.png","images/images/gym11.png","images/images/gym12.png");
  astranaut_moving = loadImage("images/images/move.png")
  bgimg=loadImage("images/images/iss.png")
}



function setup() {
  createCanvas(800,400);
  
  astranaut = createSprite(300,230);

  astranaut.addImage("bathing",bathImage);
  astranaut.addAnimation("sleeping",astranaut_sleeping);
  astranaut.addAnimation("brushing",astranaut_brushing);
  astranaut.addAnimation("drinking",astranaut_drinking);
  astranaut.addAnimation("eating",astranaut_eating);
  astranaut.addAnimation("gymming",astranaut_gym);
 // astranaut.addAnimation("moving",astranaut_moving);

  astranaut.scale = 0.1;

}

function draw() {
  background(bgimg);

edges=createEdgeSprites();
 astranaut.bounceOff(edges);
  
  if (keyDown("UP_ARROW")){
    astranaut.addAnimation("brushing",astranaut_brushing);
    astranaut.changeAnimation("brushing");
    astranaut.y = 350;
    astranaut.velocityX = 0;
    astranaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astranaut.addAnimation("gymming",astranaut_gym);
    astranaut.changeAnimation("gymming");
    astranaut.y=350;
    astranaut.velocityX = 0;
    astranaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astranaut.addAnimation("eating",astranaut_eating);
    astranaut.changeAnimation("eating");
    astranaut.y = 350
    astranaut.velocityX =0
    astranaut.velocityY =0
  }

  if (keyDown("RIGHT_ARROW")) {
    astranaut.addAnimation("bathing",bathImage);
    astranaut.changeAnimation("bathing");
    astranaut.x = 150
    astranaut.y=350
    astranaut.velocityX = 0.5
    astranaut.velocityY = 0.5
  }

 
  
  if (keyDown("m")) {
   
    astranaut.addImage(astranaut_moving);
   // astranaut.changeAnimation("moving");
    astranaut.y = 350
    astranaut.velocityX = 1 
    astranaut.velocityY = 1
  }


  drawSprites();
}