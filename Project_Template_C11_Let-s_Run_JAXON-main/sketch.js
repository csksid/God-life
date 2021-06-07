
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale = 1.2

  boy = createSprite(200,200)
  boy.addAnimation("runner", boyImg)
  boy.scale = 0.1

  invisibleWall1 = createSprite(400,200, 50, 400)
  invisibleWall1.visible = false

  invisibleWall2 = createSprite(0,200,50,400)
  invisibleWall2.visible = false
}


function draw() {

  boy.x = mouseX
  boy.collide(invisibleWall1)
  boy.collide(invisibleWall2)
  background(0);
  if(path.y > 400){
    path.y = height/2
  }
  drawSprites()

}
