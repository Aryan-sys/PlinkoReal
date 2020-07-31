var particles = [];
var plinkos = [];
var divisions = [];

var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var divisionHeight = 300;
function setup() {
  createCanvas(540,800);
  
  engine = Engine.create();
  world = engine.world;
  

  for(var k = 50; k <= width; k = k + 80){
    console.log("hi")
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 15; j <=width; j=j+50){
    plinkos.push(new Plinko(j ,75));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j ,175));
    
  }
  for(var j = 55; j <=width-10; j=j+40){
    plinkos.push(new Plinko(j ,110));
    
  }
  for(var j = 5; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j ,150));
    
  }



  ground = new Ground(240,800,600,20)




  Engine.run(engine)
}
  
function draw() {
  background(200,0,0);  
  
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 -10, width/2 + 10),10,10))
    }
    

  
  for(var j = 0; j < particles.length;j++){
    particles[j].display();
  }
  for(var k = 0; k < divisions.length;k++){
    divisions[k].display();
  }
  for(var i = 0; i < plinkos.length;i++){
   plinkos[i].display();
  }
  
  ground.display();
  drawSprites();

}