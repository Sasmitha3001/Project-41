const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine;
var drops1,drops2,drops3,drops4,drops5;
var umbrella,ground,thunder;

var maxDrops=100;


function preload(){
    
}

function setup(){
   createCanvas(400,400);
   engine=Engine.create();
   world=engine.world;

   for(var i=0;i<maxDrops;i++){
    drops1=new Drops(random(0,400),random(0,400),5);
    drops2=new Drops(random(0,400),random(0,400),5);
    drops3=new Drops(random(0,400),random(0,400),5);
    drops4=new Drops(random(0,400),random(0,400),5);
    drops5=new Drops(random(0,400),random(0,400),5);
   }
 
   umbrella= new Umbrella(200,280,150,150);
   ground= new Ground(200,350,400,20);

   thunder=new Thunder(200,40,150,150);

  

    
}

function draw(){
    Engine.update(engine);
    background(0);

    // if(frameCount%20===0){
        drops1.display();
        drops2.display();
        drops3.display();
        drops4.display();
        drops5.display();
    
    // }
    
    umbrella.display();
    ground.display();

    if(frameCount%50===0){
        thunder.display();
    }

    
}   

