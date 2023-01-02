var sea, seaImg, ship, shipImg1;
function preload() {
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup() {
  createCanvas(600, 600);
  sea = createSprite(20, 200, 400, 40);
  sea.addImage("sea", seaImg);
  sea.velocityX = -10;


  ship = createSprite(300, 400, 2, 2);
  ship.addAnimation("ship", shipImg1)

}

function draw() {
  background("blue");
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

  drawSprites()

}