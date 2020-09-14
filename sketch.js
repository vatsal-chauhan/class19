var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(200, 100, 50, 20);
 movingRect=createSprite(200,350,20,50);
 //fixedRect.velocityY=3;
 //movingRect.velocityY=-4;
}

function draw() {
  background(255,255,255);  

 edges=createEdgeSprites();

 //fixedRect.bounceOff(edges);
 //movingRect.bounceOff(edges);

  movingRect.y=mouseY;
  movingRect.x=mouseX;

  //bounceOff(fixedRect,movingRect);
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}

