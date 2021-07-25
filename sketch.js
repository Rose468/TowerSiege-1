const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

}

function setup(){
   createCanvas(1200,600);
    //rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;

Engine.run(engine);

}

function draw(){
    rectMode(CENTER)
 background("cyan")
   
}