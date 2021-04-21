var bullet, wall;
var thickness
var speed, weight;

function setup() {
  createCanvas(1200,400);
  speed=random(10,100)
  weight=random(10,100)
  thikness=random(25,90)
 bullet= createSprite(50,200,50,50)
 bullet.velocityX=speed
 wall= createSprite(1100, 200, 50, 300);
  bullet.shapeColor="white";
  wall.shapeColor="cyan"
}

function draw() {
  background("black");  
  if(bullet.isTouching (wall)){
    bullet.velocityX=0
  }
  force=speed*weight
if(force>7000){
  bullet.shapeColor="red"
}
else if(force>4000){
  bullet.shapeColor="yellow"
}
else {
  bullet.shapeColor="green"
}
  drawSprites();
  fill("white")
  textSize(15)
  text("force= "+force,100,50)
}