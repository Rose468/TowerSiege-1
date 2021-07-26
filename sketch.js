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
block1 = new Block(430,295,30,40);
block2 = new Block(460,305,30,40);
block3 = new Block(400,320,30,40);
block4 = new Block(490,340,30,40);
block5 = new Block(520,360,30,40);
block6 = new Block(550,380,30,40);
block7 = new Block(580,400,30,40);
//2nd row
block8 = new Block(430,380,30,40);
block9 = new Block(460,383,30,40);
block10 = new Block(490,388,30,40);
block11 = new Block(520,384,30,40);
block12= new Block(550,390,30,40)
//3rd row
block13 = new Block(460,340,30,40);
block14 = new Block(490,360,30,40);
block15 = new Block(520,340,30,40);

Engine.run(engine);

}

function draw(){
    rectMode(CENTER)
 background("cyan")
 text(mouseX + "," + mouseY,30,40);
   Engine.update(engine);
   ground.display();
   stand.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
  
}