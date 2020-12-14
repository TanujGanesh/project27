
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//var balls=[];
var rf;
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;
//var rps=[];

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	rf= new Roof(width/2,100,300,50);

	b1=new Bob(310,350,40);
	b2=new Bob(355,350,40);
	b3=new Bob(400,350,40);
	b4=new Bob(445,350,40);
	b5=new Bob(490,350,40);

	r1=new Rope(b1.body,rf.body,-80,0);
	r2=new Rope(b2.body,rf.body,-40,0);
	r3=new Rope(b3.body,rf.body,0,0);
	r4=new Rope(b4.body,rf.body,40,0);
	r5=new Rope(b5.body,rf.body,80,0);

	/*for(var i=0;i<5;i++){
	 balls[i]=new Bob(320+i*40,500,40);
	}
	var dia=41;
	for(var j=0;j<5;j++){
		//console.log(dia);
		rps[j]=new Rope(balls[j].body,rf.body,-dia*2,0);
		dia-=21;
	}*/
}

function keyPressed(){
	console.log("pressed");
	if(keyCode===UP_ARROW){
	   Body.applyForce(b1.body,b1.body.position,{x:-30,y:-30});
	}
}

function draw() {
  //rectMode(CENTER);
  background(150);
  Engine.update(engine);
  rf.display(); 

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  
  /*for(var a of rps){
	a.display();
  } 
  for(var b of balls){
	  b.display();
  }*/	
}



