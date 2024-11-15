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
var purpleP = { x: -1, y: -1, w: -1, h: -1, vertical: false, direction: 'none' };
var goldP = { x: -1, y: -1, w: -1, h: -1, vertical: false, direction: 'none' };
let projectiles = []; // Array of portal projectiles
let platforms = []; // platform imp starts here
let enemies = [] // Array of enemies
let curDirection = null;
let alienImage; // so enemies file can read it
let mapLevel = "map3";
var player = { x: 10, y: 0, w: 150, h: 150, v: 0, a: 1, jumpStrength: -30, dead: false, health: 3 };
//the player hit box for collision
var playerHitBox = { x: player.x, y: player.y, w: player.w - 100, h: player.h - 100, moving: false };
var canGetHurt = true;
var hurtTimer = 0;

let gameStart = true;


function preload() {
  startScreen = loadImage("assets/GALAXYMASTER2.png");
  playerImage = loadImage("assets/Character.png"); // For Character going right
  playerReverse = loadImage("assets/CharacterR.png"); // For Character going left
  level1 = loadImage("assets/level1.png");
  level2 = loadImage("assets/level2.png");
  level3 = loadImage("assets/level3.png");
  mapAssets_SpaceStation = loadImage("assets/asset.png");
  portalPurpleImage = loadImage("assets/portalPurple.png");
  portalGoldImage = loadImage("assets/portalGold.png");
  alienImage = loadImage("assets/alien.png");
  alienEnragedImage = loadImage("assets/alienEnraged.png");
  robotShoot = loadImage("assets/Robot_fire.png");
  robotWalk = loadImage("assets/Robot_walk.png");
  laser = loadImage("assets/Laser.png");
  mapAssets = loadImage("assets/PlanetAssets.png"); //space stuff
  heart = loadImage("assets/Heart.png");
  titleScreen = loadImage("assets/GALAXYMASTER2.png");
  bMusic = loadSound('music/loading.wav'); // Background Music]
  gunSound = loadSound('music/gun.wav');
  hurtSound = loadSound('music/hurt.wav');
  portalSound = loadSound('music/portal.wav');
  nextLevel = loadSound('music/newLevel.wav');
  killEnemy = loadSound('music/killEnemy.wav');
  deadRobot = loadImage('assets/deadRobot.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noSmooth();
  player.y = windowHeight - player.h;
  player.w = windowWidth / 9;
  player.h = windowHeight / 5;
  player.jumpStrength = windowHeight * 0.037 * -1
  Alien.asset = alienImage;
  Robot.assetWalk = robotWalk;
  Laser.assetLaser = laser;

}

function draw() {
  GameState(mapLevel);
  if (player.v > 0 && !player.moving) {
    curDirection = 'down'
  }
  else if (player.v < 0 && !player.moving) {
    curDirection = 'up';
  }
  //use to see hitboxes and platforms easily
  //fill("")

  //rect(playerHitBox.x, playerHitBox.y, playerHitBox.w, playerHitBox.h);

  // make the hitboxes invisible
  noStroke();
  //noFill();

  // load the maps continously to make the hit boxes bounce

  for (let i = 0; i < platforms.length; i++) {

    rect(platforms[i].x, platforms[i].y, platforms[i].w, platforms[i].h);
  }
  let isOnPlatform = false;
  player.v += player.a;
  player.y += player.v;


  for (let i = 0; i < platforms.length; i++) {
    if (isCollidingPlayer(player, playerHitBox, platforms[i])) {
      let direction = collisionDirectionPlayer(player, playerHitBox, platforms[i]);
      if (direction == "top") {
        player.y = platforms[i].y - player.h;
        player.v = 0;
        jumped = false;
        isOnPlatform = true;
      } else if (direction == "bottom") {
        player.y = platforms[i].y + platforms[i].h;
        player.v = 0;
      } else if (direction == "left") {
        player.x = platforms[i].x - player.w + 40;
      } else if (direction == "right") {
        player.x = platforms[i].x + platforms[i].w - 40;
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

  if (player.health <= 0) {
    player.dead = true;
  }

  if (gameStart == true) {
    changePortalColor();
    Teleportation();
    Death();
    updatePortals();
    PlayerMovement();
    drawPortals();
    Health();
    updateHitbox();
    noFill();
    enemyLoop();
  }
}

function keyPressed() {
  if ((keyCode == 87 || keyCode == 32) && !jumped && !crouched && !player.dead) {
    player.v = player.jumpStrength;
    jumped = true;
  }
  if (keyCode == 83) {
    crouched = true;
  }

  if (keyCode == 13 && gameStart == false) {
    gameStart = true;
  }

  if (keyCode == 13 && player.dead) {
    player.dead = false;
    background(level1);
    DrawMap(mapLevel);
    alien1 = new Alien(600, windowHeight - 120, 120, 120); // CHANGE THIS CODE SO THAT THE ALIENS ARE CORRECT FOR EACH LEVEL
    alien2 = new Alien(732, 360, 120, 120);
    alien3 = new Alien(340, 480, 120, 120);
    eAlien1 = new EnragedAlien(1200, windowHeight - 120, 120, 120);
    robot1 = new Robot(1000, windowHeight - 120, 120, 120);
    enemies.push(alien1, alien2, alien3, eAlien1, robot1);
    player.health = 3;
  }
}

function keyReleased() {
  if (keyCode == 83) {
    crouched = false;
  }
}

function isFalling(player) {
  if (player.v < 0) { return true }
  return false;
}

//used to keep the hitbox up to date with the player
function updateHitbox() {
  if (crouched) {
    playerHitBox = {
      //the player's hit box should barely overlap with the sprite
      // serves as a collision box and hurtbox.
      x: player.x + 40, y: player.y + 60, w: player.w - 80, h: player.h - 60
    };
  } else {
    playerHitBox = {
      //the player's hit box should barely overlap with the sprite
      // serves as a collision box and hurtbox.
      x: player.x + 40, y: player.y + 40, w: player.w - 80, h: player.h - 40
    };
  }
}
