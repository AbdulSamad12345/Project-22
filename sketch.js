var starImg,bgImg;
var star, starBody;

var fairy, fairyImg, fairyMove;

// var joySound

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	
	fairyImg=loadImage("fairyImage1.png")
	fairyMove=loadAnimation("fairyImage1.png","fairyImage2.png");

	// joySound=loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy=createSprite(75,500,30,30);
	fairy.addImage(fairyImg);
	fairy.scale=0.2;

	fairy.addAnimation("move",fairyMove);


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
if(star.y>470 && starBody.position.y >470){
	Matter.Body.setStatic(starBody,true);

}
 
//    joySound.play();

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === RIGHT_ARROW){
		fairy.changeAnimation("move",fairyMove);
		fairy.x=fairy.x+25;
         
	}

	if(keyCode === LEFT_ARROW){
		fairy.changeAnimation("move",fairyMove);
		fairy.x=fairy.x-25;
         
	}
}
