var bullet,wall;
var weight,speed
var bullet2,thickness;


function setup() {
  createCanvas(800,800);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(200,200,80,20);
  bullet.velocityX=speed;
  bullet.shapeColor="black";

  wall=createSprite(770,50,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet2=createSprite(200,50,80,20);
  bullet2.velocityX=speed;
  bullet2.shapeColor="black";



}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet2.depth=1;

if(collide(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   textSize(20);
   fill("blue");
   text("DAMAGE:"+damage,100,190);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}


if(collide(bullet2,wall)){
  bullet2.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}


  textSize(20);
  fill("blue");
 text("SPEED:"+speed,100,130);
 text("WEIGHT:"+weight,100,160);
 text("THICKNESS:"+thickness,100,100);
}

function collide(fire,lwall){
  bulletRightEdge=fire.x+fire.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }else{
    return false
  }
   
}