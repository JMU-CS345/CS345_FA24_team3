let numFramesY = 12;
let standing = 1;
let walking = 2;
let jumping = 3;
let frameWidth = 24
let frameHeight = 24;
var player = { x: 10, y: 0, w: 150, h: 150, v: 0, a: 1 }

function preload() {
  playerImage = loadImage("assets/Character.png");
  level1 = loadImage("assets/level1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  player.y = windowHeight - player.h;
}

function draw() {
  background(level1);
  playerMovement();
  player.v = player.v + player.a
  player.y = player.y + player.v;
  if (player.y + player.h >= windowHeight) {
    player.y = windowHeight - player.h;
  }

  function playerMovement() {
    if (keyIsDown(RIGHT_ARROW)) {
      player.x++;
      image(playerImage, player.x, player.y, player.w, player.h, 100, 100, frameWidth, frameHeight);
    }
    else if (keyIsDown(LEFT_ARROW)) {
      player.x--;
    }
    else {
      image(playerImage, player.x, player.y, player.w, player.h, 0, 0, frameWidth, frameHeight);
    }
  }
}
function keyPressed() {
}