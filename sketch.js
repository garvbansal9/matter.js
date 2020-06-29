const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var groundoptions = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,500,50,groundoptions);
  World.add(world,ground);
  var balloptions = {
    restitution:1.0
  }
  ball = Bodies.circle(200,200,30,balloptions);
  World.add(world,ball);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(0);
  Engine.update(engine); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,500,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}