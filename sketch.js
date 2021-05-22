const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron1= new Iron(100,300,50,50);
    iron2=new Iron(220,300,50,50);
    iron3=new Iron(560,300,50,50)
    rubber1=new Rubber(200,100,50);
    rubber2=new Rubber(400,100,50);
    rubber3=new Rubber(700,100,50)
   stone1=new Stone(350,100,20,20);
   stone2=new Stone(536,100,20,20);
   stone3=new Stone(320,100,20,20);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   iron1.display();
   rubber1.display();
   stone1.display();
   iron2.display();
   iron3.display();
   rubber2.display();
   rubber3.display();
   stone2.display();
   stone3.display();

    

}