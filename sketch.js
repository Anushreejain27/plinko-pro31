const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bc;
var plinkos=[];
var particles=[];
function preload(){
bc=loadImage("plinkob.jpg")

}


function setup() {
  createCanvas(480,650);
  engine = Engine.create();
    world = engine.world;


ground1=new line(240,650,481,20)
division1=new line(0-5,520,10,260)
division2=new line(80-5,520,10,260)
division3=new line(161-5,520,10,260)
division4=new line(245-5,520,10,260)
division5=new line(327-5,520,10,260)
division6=new line(409-5,520,10,260)
division7=new line(591-5,520,10,260)
for (var j=40;j<=width;j=j+50){

  plinkos.push(new plinko(j,75))
}
for (var j=10;j<=width;j=j+50){

  plinkos.push(new plinko(j,75+75))
}

for (var j=40;j<=width;j=j+50){

  plinkos.push(new plinko(j,75+75+75))
}
for (var j=10;j<=width;j=j+50){

  plinkos.push(new plinko(j,75+75+75+75))
}



}

function draw() {
  background(bc);
  Engine.update(engine);

  ground1.display()

  fill("white")
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
 
for (var j=0;j<plinkos.length;j++){
plinkos[j].display()

}
for (var j=0;j<plinkos.length;j++){
  plinkos[j].display()
  
  }
  if(frameCount%60===0){
particles.push(new particle(random(width/2-70,width/2+70),10,10))

  }
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }


  drawSprites();
}