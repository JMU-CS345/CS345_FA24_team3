let numFramesY = 12;
let standing = 1;
let walking = 2;  // Location in Sprite Sheet
let jumping = 3;  //
let frameWidth = 24;
let frameHeight = 24;
let currentFrame = 0;
let frame = 1;
let crouched = false;
let jumped = false;
let purplePortalExist = false;
let goldPortalExist = false;
let projectiles = []; // Array of portal projectiles
let platforms = []; // platform imp starts here
let pX = 0; // Purple Portal X value
let pY = 0; // Purple Portal Y Value
let gX = 0; // Gold Portal X Value
let gY = 0; // Gold Portal Y Value

var player = { x: 10, y: 0, w: 150, h: 145, v: 0, a: 1, jumpStrength: -30 };

let alienImage; // so enemies file can read it
let aiean1;

// ================
// map movement
// ================

//just supposed to be a small bounce to make our maps more alive

// the vairable that will hold the small movement
let mapScroll = 0;
// a control variable to help slow down the bounce
let moveControl = 0;
// another control variable to assure the bounce lands in the same position
let moveWait = true;

function mapMovement() {

  if (moveControl < 100 && moveWait == true) {
    //count to 100
    moveControl++;
    if (moveControl % 10 == 0) {
      //whenever the remainder is 0 move add a pixel for the bounce
      mapScroll++;
    }
    if (moveControl >= 100) { // time to start moving the asset back down
      moveWait = false;
    }
  } else { // subtract until you reach zero
    moveControl--;
    if (moveControl % 10 == 0) {
      //every time you get a number divisable by 10 subtract a pixel from the asset
      mapScroll--;
    } //when you get to zero the bounce is complete
    if (moveControl == 0) {
      moveWait = true
    }
  }
}


var player = { x: 10, y: 0, w: 150, h: 150, v: 0, a: 1, jumpStrength: -30 };
//the player hit box for collision
var playerHitBox = { x: player.x, y: player.y, w: player.w - 100, h: player.h - 100 };



function preload() {
  playerImage = loadImage("assets/Character.png"); // For Character going right
  playerReverse = loadImage("assets/CharacterR.png"); // For Character going left
  level1 = loadImage("assets/level1.png");
  mapAssets = loadImage("assets/PlanetAssets.png");
  portalPurpleImage = loadImage("assets/portalPurple.png");
  portalGoldImage = loadImage("assets/portalGold.png");
  alienImage = loadImage("assets/alien.png");
  mapAssets = loadImage("assets/PlanetAssets.png"); //space stuff

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noSmooth();
  player.y = windowHeight - player.h;
  platforms.push({ x: 500, y: 625, w: 200, h: 20 });
  platforms.push({ x: 200, y: 450, w: 200, h: 20 });
  platforms.push({ x: 970, y: 250, w: 300, h: 20 });
  platforms.push({ x: 600, y: 350, w: 200, h: 20 });
  alien1 = new Alien(600, windowHeight - 120, 120, 120, false);
  Alien.asset = alienImage;
}

function draw() {
  background(level1);
  DrawMap("map1");
  DrawMap("map1"); //draw the first level
  //use to see hitboxes and platforms easily
  //fill("purple");
  //rect(playerHitBox.x, playerHitBox.y, playerHitBox.w, playerHitBox.h);

  // make the hitboxes invisible
  noFill();
  noStroke();

  // load the maps continously to make the hit boxes bounce
  platforms = GetMap("map1");
  for (let i = 0; i < platforms.length; i++) {

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

  // Handling portal shooting
  if (keyIsDown(81)) { // PURPLE PORTALS with Q
    if (keyIsDown(RIGHT_ARROW)) {
      shootPortal("right", "purple");
    } else if (keyIsDown(LEFT_ARROW)) {
      shootPortal("left", "purple");
    } else if (keyIsDown(DOWN_ARROW)) {
      shootPortal("down", "purple");
    } else if (keyIsDown(UP_ARROW)) {
      shootPortal("up", "purple");
    }
  }

  if (keyIsDown(69)) { // GOLD PORTALS with E
    if (keyIsDown(RIGHT_ARROW)) {
      shootPortal("right", "gold");
    } else if (keyIsDown(LEFT_ARROW)) {
      shootPortal("left", "gold");
    } else if (keyIsDown(DOWN_ARROW)) {
      shootPortal("down", "gold");
    } else if (keyIsDown(UP_ARROW)) {
      shootPortal("up", "gold");
    }
  }
  if (isColliding(player, alien1) && collisionDirection(player, alien1) == 'top') {
    alien1.dead = true;
  }
  updatePortals();
  PlayerMovement();
  drawPortals();
  if (alien1.dead) {
    alien1.killed();
  }
  else {
    alien1.updateAlien();
  }
  updateHitbox();
}

function keyPressed() {
  if ((keyCode == 87 || keyCode == 32) && !jumped && !crouched) {
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

//used to keep the hitbox up to date with the player
function updateHitbox() {
  playerHitBox = {
    //the player's hit box should barley ovelap with the sprite
    // serves as a collision box and hurtbox.
    x: player.x + 40, y: player.y + 40, w: player.w - 80, h: player.h - 40
  };
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
  // Colliding with the top, bottom, right, and left of the platform, respectively
  let topCollision = (player.y + player.h) - platform.y;
  let bottomCollision = (platform.y + platform.h) - player.y;
  let leftCollision = (player.x + player.w) - platform.x;
  let rightCollision = (platform.x + platform.w) - player.x;

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
