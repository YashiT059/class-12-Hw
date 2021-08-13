
var garden,rabbit;
var gardenImg,rabbitImg;
var leaves, leafImg
var apples, appleImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage ("leaf.png");
  applesImg = loadImage ("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);


    var select_sprites = Math.round(random(1,2))

       // make apples appear ever 60 frames
      if (frameCount % 60 ==0) {
        if(select_sprites == 1 ){
          createApples();
        }
        else {
          createLeaves();
        }
      }
    
  drawSprites();
      
}
function createApples(){

  apples = createSprite (random (50,350),1, 10, 10);
  apples. addImage ("apple", applesImg);
  apples.velocityY = 4;
  apples.scale = 0.1;
}

function createLeaves(){

  leaves = createSprite (random (50,350),1, 10, 10);
  leaves. addImage ("leaf", leafImg);
  leaves.velocityY = 4;
  leaves.scale = 0.1;
}