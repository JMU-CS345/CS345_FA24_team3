
//Portal Objects
var purpleP = { x: -1, y: -1, w: -1, h: -1, vertical: false, direction: 'none' };
var goldP = { x: -1, y: -1, w: -1, h: -1, vertical: false, direction: 'none' };

let curDirection = null;


//Enemy variables

let alienImage; // so enemies file can read it
let projectiles = []; // Array of portal projectiles
let enemies = [] // Array of enemies

//player variables

let numFramesY = 12;
let standing = 1;
let walking = 2;  // Location in Sprite Sheet
let jumping = 3;  //
let currentFrame = 0;
let frame = 1;
let crouched = false;
let jumped = false;
var canGetHurt = true;
var hurtTimer = 0;

//player object
var player = { x: 10, y: 900, w: 150, h: 150, v: 0, a: 1, jumpStrength: -30, dead: false, health: 3 };
//the player hit box for collision
var playerHitBox = { x: player.x, y: player.y, w: player.w - 100, h: player.h - 100, moving: false };
//Player Spawn Point
var playerSpawn = { x: 10, y: -1 };

//Map/Game State variables
let platforms = []; // platform imp starts here
let mapLevel = ["title", "map1", "portals_tutorial", "map3", "map4", "map5", "map6",
  "map7", "map8", "boss", "end"];
let curLevel = 0;
let gameStart = false;
let gameEnd = false;
let standard_platform_size = 0;
let drawColoredPlatforms = false;


function preload() {

  //contains all of our assets :]
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
  bossImage = loadImage("assets/boss.png");
  bossRImage = loadImage("assets/bossR.png");
  bossFist = loadImage("assets/boss_fist.png");
  bossFistR = loadImage("assets/boss_fistR.png");
  bossFistUp = loadImage("assets/boss_fist_up.png");
  bossFistDown = loadImage("assets/boss_fist_down.png");
  bossLaser = loadImage("assets/boss_laser.png");
  mapAssets = loadImage("assets/PlanetAssets.png"); //space stuff
  heart = loadImage("assets/Heart.png");
  titleScreen = loadImage("assets/GALAXYMASTER2.png");
  bMusic = loadSound('music/loading.wav'); // Background Music]
  bossMusic = loadSound('music/BOSS.ogg'); // Boss Battle Music
  gunSound = loadSound('music/gun.wav');
  hurtSound = loadSound('music/hurt.wav');
  portalSound = loadSound('music/portal.wav');
  nextLevel = loadSound('music/newLevel.wav');
  killEnemy = loadSound('music/killEnemy.wav');
  deadSound = loadSound('music/deadNoise.mp3');
  deadRobot = loadImage('assets/deadRobot.png');
}

function setup() {
  let standard_platform_size = windowWidth * 0.02;
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noSmooth();
  playerSpawn.y = windowHeight - player.h;
  spawnPlayer();
  player.w = windowWidth / 9;
  player.h = windowHeight / 5;
  player.jumpStrength = windowHeight * 0.037 * -1;
  GameState(mapLevel[curLevel]);

}

function draw() {
  if (!gameEnd) {
    if (player.dead == false) {
      GameState(mapLevel[curLevel]);
    }
    if (player.v > 0 && !player.moving) {
      curDirection = 'down'
    }
    else if (player.v < 0 && !player.moving) {
      curDirection = 'up';
    }

    if (drawColoredPlatforms == true) {
      stroke(0);
      strokeWeight(3);
      fill("gray");
    } else {
      //noStroke();
      noFill();
    }

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
      GameState("death");
    }
    if (gameStart == true && gameEnd == false) {
      changePortalColor();
      Teleportation();
      PlayerMovement();
      updatePortals();
      enemyLoop();
      drawPortals();
      Health();
      updateHitbox();
    }
  }
  else {
    GameState("end");
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

  //whenever player presses enter to continue restart the current level
  if (keyCode == 13 && player.dead) {
    player.dead = false; //no longer dead
    player.health = 3; //full health
    spawnPlayer();

    nextState(mapLevel[--curLevel]); //have to call the previous state
    if (curLevel == 10) { // no repeating music
      bossMusic.loop(); //resume background music
    }
    else if (curLevel > 1) {
      bMusic.loop();
    }
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
