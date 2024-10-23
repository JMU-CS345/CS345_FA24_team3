let numFramesY = 12;
let standing = 1;
let walking = 2;
let jumping = 3;
let frameWidth = 24
let frameHeight = 24;
let currentFrame = 0;
let frame = 1;
let crouched = false;
let jumped = false;

var player = { x: 10, y: 0, w: 150, h: 150, v: 0, a: 1, jumpStrength: -20 }

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
    player.v = 0;
    jumped = false;
  }

  function playerMovement() {
    if (keyIsDown(68) && player.x < windowWidth - player.w && !crouched) { // move right
      image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight, frameWidth, frameHeight);
      if (keyIsDown(16)) {
        player.x = player.x + 5;
        currentFrame = floor(frame) % 8;
        frame = frame + 0.2;
      }
      else {
        player.x = player.x + 2;
        currentFrame = floor(frame) % 8;
        frame = frame + 0.1;
      }

    }
    else if (keyIsDown(65) && player.x > 0 && !crouched) { // move left
      image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight, frameWidth, frameHeight);
      if (keyIsDown(16)) {
        player.x = player.x - 5;
        currentFrame = floor(frame) % 8;
        frame = frame + 0.2;
      }
      else {
        player.x = player.x - 2;
        currentFrame = floor(frame) % 8;
        frame = frame + 0.1;
      }
    }
    else if (jumped && !crouched) { //Jumping
      image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight * jumping, frameWidth, frameHeight);
      currentFrame = floor(frame) % 8;
      frame = frame + 0.2;
    }
    else if (crouched) { //Crouching
      image(playerImage, player.x, player.y, player.w, player.h, frameWidth * 7, frameHeight * 4, frameWidth, frameHeight);
    }
    else { //Idel 
      image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, 0, frameWidth, frameHeight);
      currentFrame = floor(frame) % 2;
      frame = frame + 0.05;
    }
  }
}
function keyPressed() {
  if (keyCode == 87 && jumped == false) {
    player.v = player.jumpStrength
    jumped = true;

  }
  if (keyCode == 83) {
    crouched = true;
  }
}

function keyReleased() {
  if (keyCode == 83) {
    crouched = false;
  }
}