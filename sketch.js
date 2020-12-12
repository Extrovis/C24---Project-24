const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;

var ground;

var box1, box2, box3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100, 300, 30);

	ground = new Ground(width / 2, height );

	box1 = new Box(600, ground.body.position.y - 20, 200, 20);
	box2 = new Box(500, ground.body.position.y - 50, 20, 80);
	box3 = new Box(700, ground.body.position.y - 50, 20, 80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperBall.display();

  ground.display();

  box1.display();

  box2.display();

  box3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 30, y: -35});
	}
}



