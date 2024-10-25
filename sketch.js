let numFramesY = 12;
let standing = 1; //
let walking = 2;  //Location in Sprite Sheet
let jumping = 3;  //
let frameWidth = 24
let frameHeight = 24;
let currentFrame = 0;
let frame = 1;
let crouched = false;
let jumped = false;

var player = { x: 10, y: 0, w: 150, h: 150, v: 0, a: 1, jumpStrength: -20 }

function preload() {
  playerImage = loadImage("assets/Character.png"); // For Character going right
  playerReverse = loadImage("assets/CharacterR.png"); //For Character going left 
  level1 = loadImage("assets/level1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  player.y = windowHeight - player.h;
}

function draw() {
  background(level1);
  PlayerMovement();
  player.v = player.v + player.a
  player.y = player.y + player.v;
  if (player.y + player.h >= windowHeight) {
    player.y = windowHeight - player.h;
    player.v = 0;
    jumped = false;
  }
}
function keyPressed() {
  if (keyCode == 87 || keyCode == 32 && jumped == false) {
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