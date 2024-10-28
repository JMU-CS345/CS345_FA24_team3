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

var player = { x: 10, y: 0, w: 150, h: 150, v: 0, a: 1, jumpStrength: -30 };

function preload() {
  playerImage = loadImage("assets/Character.png"); // For Character going right
  playerReverse = loadImage("assets/CharacterR.png"); //For Character going left
  level1 = loadImage("assets/level1.png");
  mapAssets = loadImage("assets/PlanetAssets.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noSmooth();
  player.y = windowHeight - player.h;
  platforms.push({ x: 500, y: 625, w: 200, h: 20 });
  platforms.push({ x: 200, y: 450, w: 200, h: 20 });
  platforms.push({ x: 900, y: 250, w: 300, h: 20 });
  platforms.push({ x: 600, y: 350, w: 200, h: 20 });
}

function draw() {
  background(level1);
  DrawMap("map1");
  color = 'purple';
  for (let i = 0; i < platforms.length; i++) {
    fill(color);
    rect(platforms[i].x, platforms[i].y, platforms[i].w, platforms[i].h);
  }
  let isOnPlatform = false;
  player.v += player.a;
  player.y += player.v;

  for (let i = 0; i < platforms.length; i++) {
    if (isColliding(player, platforms[i])) {
      let direction = collisionDirection(player, platforms[i]);
      if (direction == "top") {
        player.y = platforms[i].y - player.h;
        player.v = 0;
        jumped = false;
        isOnPlatform = true;
      } else if (direction == "bottom") {
        player.y = platforms[i].y + platforms[i].h;
        player.v = 0;
      } else if (direction == "left") {
        player.x = platforms[i].x - player.w;
      } else if (direction == "right") {
        player.x = platforms[i].x + platforms[i].w;
      }
    }
  }

  if (!isOnPlatform) {
    player.v += player.a;
  }


  if (player.y + player.h >= windowHeight) {
    player.y = windowHeight - player.h;
    player.v = 0;
    jumped = false;
  }

  PlayerMovement();
}
function keyPressed() {
  if ((keyCode == 87 || keyCode == 32) && !jumped) {
    player.v = player.jumpStrength;
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

function collisionDirection(player, platform) {
  //colliding with the top, bottom, right and left of the platform, respectively
  topCollision = (player.y + player.h) - platform.y;
  bottomCollision = (platform.y + platform.h) - player.y;
  leftCollision = (player.x + player.w) - platform.x;
  rightCollision = (platform.x + platform.w) - player.x;

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
