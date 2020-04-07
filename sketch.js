var box1, box2;

function setup() {
  createCanvas(800,400);

  box1 = createSprite(400,200,50,50);
  box1.shapeColor = "green";
  


  box2 = createSprite(400,300,90,40);
  box2.shapeColor= "green";

  box1.velocityY  = 5;
  box2.velocityY = -3
}

function draw() {
  background(0); 
  
  

  if (box1.x - box2.x < box1.width/2 + box2.width/2&& box2.x - box1.x< box1.width/2 + box2.width/2
    && box1.y - box2.y < box1.height/2 + box2.height/2 && box2.y - box1.y < box1.height/2 + box2.height/2){
      box1.shapeColor = "red";
      box2.shapeColor = "red";
      box1.velocityY = box1.velocityY * -1;
      box2.velocityY = box2.velocityY * -1;
    } else {
      box1.shapeColor = "green";
      box2.shapeColor = "green";
    }
  
  drawSprites();
}