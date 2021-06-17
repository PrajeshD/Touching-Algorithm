var fixed, moving


function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(300,400,50,50)
}

function draw() {  
  moving.x=mouseX
  moving.y=mouseY
  console.log(moving.x-fixed.x)
  if (moving.x-fixed.x<=moving.width/2+fixed.width/2&&fixed.x-moving.x<=moving.width/2+fixed.width/2
     &&moving.y-fixed.y<=moving.height/2+fixed.height/2&&fixed.y-moving.y<=moving.height/2+fixed.height/2){
  fixed.shapeColor='black'
  moving.shapeColor='white'
  background(140)  
  }
  else{
  fixed.shapeColor='red'
  moving.shapeColor='blue'
  background('yellow')
  }
  drawSprites();
}

