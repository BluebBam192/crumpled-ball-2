
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper;
var ground;
var bin1;

function preload()
{
	dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200);

	ground = new Ground(400,690,800,50);

	bin1 = new Bin(550, 590, 20, 130);
	bin2 = new Bin(690, 590, 20, 130);
	bin3 = new Bin(620, 650, 150,20);

  
}


function draw() {
	Engine.update(engine);
	background("white");
	
	paper.display();

	ground.display();

	bin1.display();
	bin2.display();
	bin3.display();

    image(dustbinimg,620,590,170,160);	
}
function keyPressed(){
	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
    
  	}
}



