
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world,paper;
var leftdb,rightdb,bottomdb;
var paperimg,binimg;

function preload()
{
	binimg = loadImage("Images/dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	
	crumbledPaper = new Paper(100,300,10);

	//bin
	bin = createSprite(630,620,40,70);
	bin.addImage(binimg);
	bin.scale = 0.4;

	leftdb = new Dustbin(590,640,20,100);
	bottomdb = new Dustbin(630,680,60,20);
	rightdb = new Dustbin(670,640,20,100);

	ground = new Ground(30,695,1600,15);

	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("grey");

  crumbledPaper.display();
  bin.display();
  leftdb.display();
  bottomdb.display();
  rightdb.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumbledPaper.body, crumbledPaper.body.position, {
			x:60,
			y:-60
		})
	}
}



