const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var iron;
var stone;
var ball1, ball2, ball3, ball4, ball5;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    iron = new Iron(100,100);

    stone = new Stone(900,100);

    ball1 = new Rubber(300,100,10);
    ball2 = new Rubber(330,100,30);
    ball3 = new Rubber(370,100,50);
    ball4 = new Rubber(430,100,70);

    hammer = new Hammer(10,100);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
   
    plane.display();

    iron.display();

    stone.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();

    hammer.display();

    
 
}