const Engine = Matter.Engine;
//name spacing 
const World = Matter.World;
const Bodies = Matter.Bodies; 
//const (constant) keyword 
//engine is used to create Physics Engine
//world is used to create physical world
//bodies is used to create the physical objects that inhabit the world
var engine,world;
var box1;
var box2;
var ground;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world; 
  box1 = new Box(200,300,50,50);
  box2 = new Box(220,100,50,100);
  ground = new Ground(200,390,400,20);
}

function draw() {
  background("cyan");  
  Engine.update(engine);
  //3 objects in matter.js
  box1.display() 
  box2.display()
  ground.display()
}