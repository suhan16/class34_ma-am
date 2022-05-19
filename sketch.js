
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var background_Img,helicopter_Img,people_Img,target_Img;
 var helicopter,bg;

function preload(){
helicopter_Img = loadImage("/pictures/Helicopter.png")
people_Img = loadImage("/pictures/people.png")
target_Img = loadImage("/pictures/target.png")
// background_Img = loadImage("/pictures/flooded.jpg");




}
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  bg = new Ground(width/2,height/2,width*2,height);
  
  target = createSprite(100,100,100,100)

//helicopter = createSprite(100,100,10,10);
// helicopter.addImage(helicopter_Img);
// helicopter.scale = 10  
var helicopter_options = {
isStatic : true
}
helicopter = Bodies.rectangle(100,50,100,100,helicopter_options);
World.add(world,helicopter);
}


function draw() 
{
  

  background(51);
  
   //background.velocityX = -2




 // image(background_Img, width/2, height/2, width, height);

  Engine.update(engine);
  
  Matter.Body.setVelocity(bg.body,{x:0,y:0})
  bg.show();
  
  imageMode(CENTER)
  image(helicopter_Img,helicopter.position.x,helicopter.position.y,250,250);
  
  drawSprites();


}

