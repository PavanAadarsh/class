const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options ={
        isStatic: true
    }
    
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var boxoption = {
    restitution  : 1.0,
    isStatic : false

    }
    box = Bodies.circle(200,150,20,boxoption);
    World.add(world,box);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS)
    ellipse(box.position.x,box.position.y,20,20);
}