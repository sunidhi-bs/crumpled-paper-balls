
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	ground = Bodies.rectangle(400,500,800,10 , {isStatic:true} );
	World.add(world,ground);
	
	//Create the Bodies Here.
	object1 = new Dustbin(650,500,170,20);
	object2 = new Dustbin(745,450,20,120);
	object3 = new Dustbin(555,450,20,120);
    paper = new Paper(150,450,3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  object1.display();
  object2.display();
  object3.display();
  paper.display();
  fill("blue");
  rectMode(CENTER);
   rect(400,510,800,10);

}
function keyPressed(){
 if (keyCode === UP_ARROW){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25})
 }
}


