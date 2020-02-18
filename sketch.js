var sun, earth;
var sunImage, earthImage;
var angle=0;
var angleSpeed=0.2; 
function preload(){

sunImage = loadImage("sun.png");
earthImage = loadImage("earth.png");

}

function setup(){
createCanvas(2000,2000);

sun = createSprite(0,0);
sun.addImage("sun",sunImage);
sun.scale=0.1
earth = createSprite(200,50);
earth.addImage("earth", earthImage);
earth.scale= 0.1;

}

function draw(){
background("black");

angleMode(DEGREES);
translate(width/2, height/2);
rotate(angle);
angle = angle + angleSpeed;

if(frameCount % 1 === 0 ){
sun.scale = sun.scale+0.001;
}
if(earth.isTouching(sun)){
    earth.visible = false;
}
drawSprites();
}