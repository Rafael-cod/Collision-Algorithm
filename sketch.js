var fixRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

  fixRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixRect.x < fixRect.width/2 + movingRect.width/2
    && fixRect.x - movingRect.x < fixRect.width/2 + movingRect.width/2
    && fixRect.y - movingRect.y < fixRect.height/2 + movingRect.height/2
    && movingRect.y - fixRect.y < fixRect.height/2 + movingRect.height/2
    ){
    fixRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else{
    fixRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  console.log(movingRect.x - fixRect.x);
  drawSprites();
}