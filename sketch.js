const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand,block1;

function preload(){

}

function setup(){
   createCanvas(1200,600);
    //rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;

 ground = new Ground(600,height,1200,20);
 stand = new Ground(490,450,240,10);
block1 = new Block(330,235,30,40);

Engine.run(engine);

}

function draw(){
    rectMode(CENTER)
 background("cyan")
 text(mouseX + "," + mouseY,30,40)
   Engine.update(engine);
   ground.display();
   stand.display();
   block1.display();
}