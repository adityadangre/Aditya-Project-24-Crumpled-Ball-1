const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var pball;
var dustbinw1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

  pball = new Paper(100,640);
  ground= new Ground(500,680,1000,10);
  dustbinw1= new Dustbin(700,625,15,100);
  dustbinw2= new Dustbin(900,625,15,100);
  dustbinw3= new Dustbin(800,670,215,15);
}


function draw() {
  rectMode(CENTER);
  background("blue");

  textSize(50);
  fill("black");
  stroke("white");
  strokeWeight(5);
  text("Press Up Arrow",300,100);
  text("And Put the Garbage in the Dustbin",100,180);
  text("Dustbin",710,550);

  pball.display();
  dustbinw1.display()  ;
  dustbinw2.display()  ;
  dustbinw3.display()  ;
  ground.display();
  drawSprites();
 
}
function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(pball.body,pball.body.position,{x:70,y:-70});

	}



}
 


