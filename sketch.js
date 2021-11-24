
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,grounda,groundb;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(1200,1200);


	engine = Engine.create();

	world = engine.world;

	ground =new Ground(1100,600,20,120);
	grounda =new Ground(width/2,670,width,20);
	groundb =new Ground(1000,600,20,120);
	//Create the Bodies Here.
      var ball_options={
		
		restitution: 0.3,
		density:1.2
	}
     ball =  Matter.Bodies.circle(500,19,20,ball_options)
	 World.add(world,ball);
	 Engine.run(engine);
     
}
function keyPressed() {
if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:20})


}
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 circle( ball.position.x,ball.position.y,20)

  ground.display();
  grounda.display();
  groundb.display();
  drawSprites();
 

}



