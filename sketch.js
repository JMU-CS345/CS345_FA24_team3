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
let platforms = []; //platform imp starts here

var player = { x: 10, y: 0, w: 150, h: 150, v: 0, a: 1, jumpStrength: -20 }

function preload() {
  playerImage = loadImage("assets/Character.png"); // For Character going right
  playerReverse = loadImage("assets/CharacterR.png"); //For Character going left
  level1 = loadImage("assets/level1.png");
  mapAssets = loadImage("assets/PlanetAssets.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  player.y = windowHeight - player.h;
  platforms.push({ x: 100, y: 350, w: 200, h: 20 });
  platforms.push({ x: 200, y: 550, w: 200, h: 20 });
}

function draw() {
  background(level1);
  DrawMap("map1");

  color = 'purple';
  for (let i = 0; i < platforms.length; i++) {
    fill(color);
    rect(platforms[i].x, platforms[i].y, platforms[i].w, platforms[i].h);
  }

  for (let i = 0; i < platforms.length; i++) {
    if (isColliding(player, platforms[i])) {
      if (collisionDirection(player, platforms[i]) == "bottom") {
        player.y = 0;
        //player.y = platform.y + platform.h;
      } else if (collisionDirection(player, platforms[i]) == "top") {
        player.y = windowHeight;
        //player.y = platform.y - player.h;
      } else if (collisionDirection(player, platforms[i]) == "left") {
        player.x = 0;
        //player.x = platform.x + platform.w;
      } else if (collisionDirection(player, platforms[i]) == "right") {
        player.x = windowWidth;
        //player.x = platform.x - player.w;
      }
    }
  }

  function isColliding(player, platform) {
    // Check if player is above platform
    if (player.y + player.h < platform.y) return false;
    // Check if player is below platform
    if (player.y > platform.y + platform.h) return false;
    // Check if player is to the left of platform
    if (player.x + player.w < platform.x) return false;
    // Check if player is to the right of platform
    if (player.x > platform.x + platform.w) return false;
    // If none of the above conditions are true, there is a collision
    return true;
  }

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

function collisionDirection(player, platform) {
  //colliding with the top, bottom, right and left of the platform, respectively
  topCollision = (platform.y + platform.h) - player.y;
  bottomCollision = (player.y + player.h) - platform.y;
  rightCollision = (platform.x + platform.w) - player.x;
  leftCollision = (player.x + player.w) - platform.x;

  // Find the smallest collision distance (indicating the direction of collision)
  if (topCollision < bottomCollision && topCollision < leftCollision && topCollision < rightCollision) {
    return 'top';  // Colliding with the top of the platform
  } else if (bottomCollision < topCollision && bottomCollision < leftCollision && bottomCollision < rightCollision) {
    return 'bottom';  // Colliding with the bottom of the platform
  } else if (rightCollision < leftCollision && rightCollision < bottomCollision && rightCollision < topCollision) {
    return 'right';  // Colliding with the right side of the platform
  } else {
    return 'left';  // Colliding with the left side of the platform
  }
}
