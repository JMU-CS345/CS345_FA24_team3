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
let mapLevel = "map1";
var player = { x: 10, y: 0, w: 150, h: 150, v: 0, a: 1, jumpStrength: -30, dead: false, health: 3 };
//the player hit box for collision
var playerHitBox = { x: player.x, y: player.y, w: player.w - 100, h: player.h - 100, moving: false };



function preload() {
  startScreen = loadImage("assets/GALAXYMASTER2.png");
  playerImage = loadImage("assets/Character.png"); // For Character going right
  playerReverse = loadImage("assets/CharacterR.png"); // For Character going left
  level1 = loadImage("assets/level1.png");
  level2 = loadImage("assets/level2.png");
  mapAssets_SpaceStation = loadImage("assets/asset.png");
  portalPurpleImage = loadImage("assets/portalPurple.png");
  portalGoldImage = loadImage("assets/portalGold.png");
  alienImage = loadImage("assets/alien.png");
  alienEnragedImage = loadImage("assets/alienEnraged.png");
  mapAssets = loadImage("assets/PlanetAssets.png"); //space stuff
  heart = loadImage("assets/Heart.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noSmooth();
  player.y = windowHeight - player.h;
  alien1 = new Alien(600, windowHeight - 120, 120, 120);
  alien2 = new Alien(732, 360, 120, 120);
  alien3 = new Alien(340, 480, 120, 120);
  enemies.push(alien1, alien2, alien3);
  Alien.asset = alienImage;


}

function draw() {
  GameState(mapLevel)
  if (player.v > 0 && !player.moving) {
    curDirection = 'down'
  }
  else if (player.v < 0 && !player.moving) {
    curDirection = 'up';
  }
  //use to see hitboxes and platforms easily
  fill("purple");
  // fill("purple")

  //rect(playerHitBox.x, playerHitBox.y, playerHitBox.w, playerHitBox.h);

  // make the hitboxes invisible
  // noStroke();
  // noFill();

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

  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];

    enemy.v += enemy.a;
    enemy.y += enemy.v;

    let enemyIsOnPlatform = false;

    for (let j = 0; j < platforms.length; j++) {
      if (isCollidingEnemy(enemy, platforms[j])) {
        let direction = collisionDirectionObject(enemy, platforms[j]);

        if (direction === "top") {
          enemy.y = platforms[j].y - enemy.h;
          enemy.v = 0;
          onPlatform = true;
        } else if (direction === "bottom") {
          enemy.y = platforms[j].y + platforms[j].h;
          enemy.v = 0;
        }
      }
    }

    if (!enemyIsOnPlatform) {
      enemy.v += enemy.a;
    }

    if (enemy.y + enemy.h >= windowHeight) {
      enemy.y = windowHeight - enemy.h;
      enemy.v = 0;
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];

    if (isCollidingPlayer(player, playerHitBox, enemy) && collisionDirectionPlayer(player, playerHitBox, enemy) == 'top' && !isFalling(player)) {
      enemy.dead = true;
      enemy.deathTime = millis();
    } else if (isCollidingPlayer(player, playerHitBox, enemy) && collisionDirectionPlayer(player, playerHitBox, enemy) != 'top' && !enemy.dead) {
      enemy.attack(player);
      player.health--;
      if (player.health <= 0) {
        player.dead = true;
      }
    }
  }
  portalInput();
  Teleportation();
  Death();
  updatePortals();
  PlayerMovement();
  drawPortals();
  Health();


  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];

    if (enemy.dead) {
      enemy.killed();
      if (millis() - enemy.deathTime >= 1000) {
        enemies[i] = null;
        enemies.splice(i, 1);
      }
    }
    else {
      enemy.updateAlien();
    }
  }
  updateHitbox();
  noFill();
}

function keyPressed() {
  if ((keyCode == 87 || keyCode == 32) && !jumped && !crouched && !player.dead) {
    player.v = player.jumpStrength;
    jumped = true;
  }
  if (keyCode == 83) {
    crouched = true;
  }
  if (keyCode == 13 && player.dead) {
    player.dead = false;
    background(level1);
    DrawMap(mapLevel);
    alien1 = new Alien(600, windowHeight - 120, 120, 120); // CHANGE THIS CODE SO THAT THE ALIENS ARE CORRECT FOR EACH LEVEL
    alien2 = new Alien(732, 360, 120, 120);
    alien3 = new Alien(340, 480, 120, 120);
    enemies.push(alien1, alien2, alien3);
    Alien.asset = alienImage;
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
      x: player.x + 40, y: player.y + 95, w: player.w - 45, h: player.h - 90
    };
  } else {
    playerHitBox = {
      //the player's hit box should barely overlap with the sprite
      // serves as a collision box and hurtbox.
      x: player.x + 40, y: player.y + 40, w: player.w - 80, h: player.h - 40
    };
  }
}

function nextLevel(gameMap) {
  switch (gameMap) {
    case "map1":
      if (playerHitBox.y > windowHeight * 0.457 + mapScroll && playerHitBox.y < windowHeight * 0.457 + mapScroll + 80 && playerHitBox.x > windowWidth * 0.72 && playerHitBox.x < windowWidth * 0.72 + 80 && mapLevel == "map1") {
        mapLevel = "portals_tutorial"
        platforms = GetMap("portals_tutorial");
        console.log(platforms);
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }
        background(level2);
        purpleP.x = -1;
        goldP.x = -1;
      }
  }
}

