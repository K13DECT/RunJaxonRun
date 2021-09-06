var path;
var pathImage;

var jaxon;
var jaxonWalking;

var edges;
var leftBoundary;
var rightBoundary;

function preload(){

pathImage = loadImage("path.png")
jaxonWalking = loadAnimation("runner-1.png","runner-2.png")

}

function setup(){

  createCanvas(400,400);

  path = createSprite (200,200)
  path.scale=1.2
  path.velocityY = 4;
  path.addImage ("pathImage", pathImage)


  jaxon=createSprite (180, 340, 30, 30)
  jaxon.addAnimation ("jaxonWalking",jaxonWalking)
  jaxon.scale=0.08

 leftBoundary=createSprite(0,0,100,800)
leftBoundary.visibile=false
  
rightBoundary=createSprite(410,0,100,800)
rightBoundary.visibile=false

}

function draw() { 

  background(0); 

  path.velocityY = 4; 

  jaxon.x = World.mouseX;

  edges= createEdgeSprites(); 
  jaxon.collide(edges[3]); 
  jaxon.collide(leftBoundary); 
  jaxon.collide(rightBoundary); 

  if(path.y > 400 ){ 
    path.y = height/2; }

  drawSprites();

 }