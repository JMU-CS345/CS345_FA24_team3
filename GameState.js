/*These variables are for the "blue black hole portal" to finish each level
Initiate the x and y values for the levels portal to know when the player
contacts the portal*/
var goal = { x: -1, y: -1, w: 140, h: 140 };
let restartLevel = false;


function GameState(state) {
  switch (state) {
    case "title":
      background("black");
      DrawMap(state);
      nextState(state);
      break;

    case "map1":
      background(level1);
      DrawMap(state);
      nextState(state);
      break;

    case "portals_tutorial":
      background(level2);
      DrawMap(state);
      nextState(state);
      break;

    case "map3":
      background(level3);
      DrawMap(state);
      nextState(state);
      break;

    case "map4":
      background(level1);
      DrawMap(state);
      nextState(state);
      break;

    case "map5":
      background(level2);
      DrawMap(state);
      nextState(state);
      break;

    case "map6":
      background(level3);
      DrawMap(state);
      nextState(state);
      break;

    case "map7":
      background(level2);
      DrawMap(state);
      nextState(state);
      break;

    case "map8":
      background(level1);
      DrawMap(state);
      nextState(state);
      break;

    case "boss":
      background(level3);
      DrawMap(state);
      nextState(state);
      break;

    case "end":
      background("black");
      DrawMap("end");
      break;

    case "death":
      player.dead = true;
      restartLevel = true;
      Death();
      DrawMap("death");
      break;

  }

}




function nextState(state) {
  switch (state) {
    case "title":
      if (gameStart == true || restartLevel == true) {
        //drawColoredPlatforms = true;
        bMusic.loop();
        curLevel++;

        platforms = GetMap(mapLevel[curLevel]);
        //The WindowHeight / 6.5 and WindowWidth / 12 are for making the enemies change size based on the screen size

        //setting up goal
        goal.x = windowWidth * 0.7;
        goal.y = windowHeight * 0.4 + mapScroll;

        //Starting Location for this map
        playerSpawn.x = windowWidth * 0.05;
        playerSpawn.y = windowHeight * 0.8;
        spawnPlayer();

        //If no textures, just use colored platforms. Must change to false after other level
        drawColoredPlatforms = true;

        //Enemies
        alien1 = new Alien(600, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        alien2 = new Alien(732, 360, windowWidth / 12, windowHeight / 6.5);
        alien3 = new Alien(340, 480, windowWidth / 12, windowHeight / 6.5);
        enemies.push(alien1, alien2, alien3);

        Alien.asset = alienImage;
        EnragedAlien.asset = alienEnragedImage
        Robot.assetWalk = robotWalk;
        Laser.assetLaser = laser;
        Boss.asset = bossImage;
        Boss.assetR = bossRImage;
        Laserbeam.assetLaser = bossLaser;
        Fist.assetFist = bossFist;
        Fist.assetFistR = bossFistR;
        Fist.assetFistUp = bossFistUp;
        Fist.assetFistDown = bossFistDown;

        //making sure to clear the restart if applicable
        restartLevel = false;
      }
      break;
    case "map1":
      //0.69 was 0.72, Hopefully this fixed this entry into portal tutorial
      //check if the player is touching the goal or need to restart the level
      if ((isCollidingObject(playerHitBox, goal) || restartLevel == true) && !checkPlayerMoveAndJump()) {
        bMusic.pause()
        bMusic.loop();
        //clean up this level

        //clear enemies
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }

        //Clear the portals
        purpleP.x = -1;
        goldP.x = -1;

        //Do the things needed for the next level

        //LEVEL UP
        nextLevel.play();
        curLevel++;
        platforms = GetMap(mapLevel[curLevel]);

        //background
        background(level2);

        //If no textures, just use colored platforms. Must change to false after other level
        drawColoredPlatforms = false;

        //Setting up goal
        goal.x = windowWidth * 0.2;
        goal.y = windowHeight * 0.1 + mapScroll;

        //Player spawn
        playerSpawn.x = windowWidth * 0.8;
        playerSpawn.y = windowHeight * 0.9;
        spawnPlayer();

        //Enemies
        alien1 = new Alien(windowWidth * 0.1, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        robot1 = new Robot(windowWidth / 2, windowHeight / 2, windowWidth / 12, windowHeight / 6.5);
        Alien.asset = alienImage;
        Robot.asset = robotWalk;
        enemies.push(alien1, robot1);

        //making sure to clear the restart if applicable
        restartLevel = false;
      }
      break;

    case "portals_tutorial":
      //checking if the player is touching the goal or need to restart the level
      if ((isCollidingObject(playerHitBox, goal) || restartLevel == true) && !checkPlayerMoveAndJump()) {
        bMusic.pause()
        bMusic.loop();
        //clean up this level

        //Clear Enemies
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }
        //clean up the portals
        purpleP.x = -1;
        goldP.x = -1;

        //Set up the things for the next level

        //LEVEL UP
        curLevel++;
        platforms = GetMap(mapLevel[curLevel]);

        //background for next level
        background(level3);

        //set spawn point for next level
        playerSpawn.x = windowWidth * 0.1;
        playerSpawn.y = windowHeight * 0.9;
        spawnPlayer();
        nextLevel.play();

        //If no textures, just use colored platforms. Must change to false after other level
        drawColoredPlatforms = false;

        //Set up the goal for next level
        goal.x = windowWidth * 0.73;
        goal.y = windowHeight * 0.05;

        eAlien1 = new EnragedAlien(windowWidth * 0.6, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien2 = new EnragedAlien(windowWidth * 0.4, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        robot1 = new Robot(windowWidth * 0.05, windowHeight / 4, windowWidth / 12, windowHeight / 6.5);
        robot2 = new Robot(windowWidth * 0.05, windowHeight / 3, windowWidth / 12, windowHeight / 6.5);
        EnragedAlien.asset = alienEnragedImage;
        Robot.asset = robotWalk;

        enemies.push(eAlien1, eAlien2, robot1, robot2);

        //make sure to clear restart if applicable
        restartLevel = false;
      }
      break;
    case "map3":
      if ((isCollidingObject(playerHitBox, goal) || restartLevel == true) && !checkPlayerMoveAndJump()) {
        bMusic.pause()
        bMusic.loop();
        //clean up this level
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }

        //clean up the portals
        purpleP.x = -1;
        goldP.x = -1;

        //set spawn point for next level
        playerSpawn.x = windowWidth * 0.01;
        playerSpawn.y = windowHeight * 0.45;
        spawnPlayer();

        //Set up the things for the next level

        curLevel++;
        background(level1);
        platforms = GetMap(mapLevel[curLevel]);
        nextLevel.play();

        robot1 = new Robot(800, windowWidth - 120, windowWidth / 12, windowHeight / 6.5);
        robot2 = new Robot(1200, windowWidth - 120, windowWidth / 12, windowHeight / 6.5);
        robot3 = new Robot(1600, windowWidth - 120, windowWidth / 12, windowHeight / 6.5);
        robot4 = new Robot(1050, windowWidth - 120, windowWidth / 12, windowHeight / 6.5);
        enemies.push(robot1, robot2, robot3, robot4);

        //If no textures, just use colored platforms. Must change to false after other level
        drawColoredPlatforms = true;

        //Set up the goal for next level
        goal.x = windowWidth * 0.93;
        goal.y = windowHeight * 0.45;

        //make sure to clear restart if applicable
        restartLevel = false;
      }
      break;

    case "map4":
      if ((isCollidingObject(playerHitBox, goal) || restartLevel == true) && !checkPlayerMoveAndJump()) {
        bMusic.pause()
        bMusic.loop();
        //clean up this level
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }

        //clean up the portals
        purpleP.x = -1;
        goldP.x = -1;

        //set spawn point for next level
        playerSpawn.x = windowWidth * 0.01;
        playerSpawn.y = windowHeight * 0.5;
        spawnPlayer();

        //Set up the things for the next level

        curLevel++;
        background(level1);
        platforms = GetMap(mapLevel[curLevel]);
        nextLevel.play();

        eAlien1 = new EnragedAlien(windowWidth * 0.43, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien2 = new EnragedAlien(windowWidth * 0.45, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien3 = new EnragedAlien(windowWidth * 0.5, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien4 = new EnragedAlien(windowWidth * 0.35, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien5 = new EnragedAlien(windowWidth * 0.4, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien6 = new EnragedAlien(windowWidth * 0.32, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        enemies.push(eAlien1, eAlien2, eAlien3, eAlien4, eAlien5, eAlien6);

        //If no textures, just use colored platforms. Must change to false after other level
        drawColoredPlatforms = true;

        //Set up the goal for next level
        goal.x = windowWidth * 0.93;
        goal.y = windowHeight * 0.75;

        //make sure to clear restart if applicable
        restartLevel = false;
      }
      break;

    case "map5": // Pushing to level 6
      if ((isCollidingObject(playerHitBox, goal) || restartLevel == true) && !checkPlayerMoveAndJump()) {
        bMusic.pause()
        bMusic.loop();
        //clean up this level
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }

        //clean up the portals
        purpleP.x = -1;
        goldP.x = -1;

        //set spawn point for next level
        playerSpawn.x = windowWidth * 0.05;
        playerSpawn.y = windowHeight * 0.01;
        spawnPlayer();

        //Set up the things for the next level

        curLevel++;
        background(level1);
        platforms = GetMap(mapLevel[curLevel]);
        nextLevel.play();

        robot1 = new Robot(300, windowHeight - 300, windowWidth / 12, windowHeight / 6.5);
        robot2 = new Robot(1100, windowHeight - 1000, windowWidth / 12, windowHeight / 6.5);
        robot3 = new Robot(1300, windowHeight - 1000, windowWidth / 12, windowHeight / 6.5);
        enemies.push(robot1, robot2, robot3);

        //If no textures, just use colored platforms. Must change to false after other level
        drawColoredPlatforms = true;

        //Set up the goal for next level
        goal.x = windowWidth * 0.93;
        goal.y = windowHeight * 0.3 + mapScroll;

        //make sure to clear restart if applicable
        restartLevel = false;
      }
      break;

    case "map6":
      if ((isCollidingObject(playerHitBox, goal) || restartLevel == true) && !checkPlayerMoveAndJump()) {
        bMusic.pause()
        bMusic.loop();
        //clean up this level
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }

        //clean up the portals
        purpleP.x = -1;
        goldP.x = -1;

        //set spawn point for next level
        playerSpawn.x = windowWidth * 0.01;
        playerSpawn.y = windowHeight * 0.05;
        spawnPlayer();

        //Set up the things for the next level

        curLevel++;
        background(level1);
        platforms = GetMap(mapLevel[curLevel]);
        nextLevel.play();

        eAlien1 = new EnragedAlien(windowWidth * 0.43, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien2 = new EnragedAlien(windowWidth * 0.45, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien3 = new EnragedAlien(windowWidth * 0.5, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien4 = new EnragedAlien(windowWidth * 0.35, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien5 = new EnragedAlien(windowWidth * 0.52, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien6 = new EnragedAlien(windowWidth * 0.54, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien7 = new EnragedAlien(windowWidth * 0.56, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien8 = new EnragedAlien(windowWidth * 0.58, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien9 = new EnragedAlien(windowWidth * 0.60, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien10 = new EnragedAlien(windowWidth * 0.62, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien11 = new EnragedAlien(windowWidth * 0.64, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien12 = new EnragedAlien(windowWidth * 0.66, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien13 = new EnragedAlien(windowWidth * 0.68, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien15 = new EnragedAlien(windowWidth * 0.24, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien16 = new EnragedAlien(windowWidth * 0.26, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien17 = new EnragedAlien(windowWidth * 0.28, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien18 = new EnragedAlien(windowWidth * 0.35, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien19 = new EnragedAlien(windowWidth * 0.4, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        eAlien20 = new EnragedAlien(windowWidth * 0.3, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        enemies.push(eAlien1, eAlien2, eAlien3, eAlien4, eAlien5, eAlien6, eAlien7, eAlien8, eAlien9, eAlien10, eAlien11, eAlien12, eAlien13, eAlien15, eAlien16, eAlien17, eAlien18, eAlien19, eAlien20);

        //If no textures, just use colored platforms. Must change to false after other level
        drawColoredPlatforms = false;

        //Set up the goal for next level
        goal.x = windowWidth * 0.05;
        goal.y = windowHeight * 0.8 + mapScroll;

        //make sure to clear restart if applicable
        restartLevel = false;
      }
      break;

    case "map7":
      if ((isCollidingObject(playerHitBox, goal) || restartLevel == true) && !checkPlayerMoveAndJump()) {
        bMusic.pause()
        bMusic.loop();
        //clean up this level
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }

        //clean up the portals
        purpleP.x = -1;
        goldP.x = -1;

        //set spawn point for next level
        playerSpawn.x = windowWidth * 0.01;
        playerSpawn.y = windowHeight * 0.8;
        spawnPlayer();

        //Set up the things for the next level

        curLevel++;
        background(level3);
        nextLevel.play();
        platforms = GetMap(mapLevel[curLevel]);

        //enemies for next level
        robot1 = new Robot(windowWidth * 0.1, windowHeight * 0.15, windowWidth / 12, windowHeight / 6.5);
        robot2 = new Robot(windowWidth * 0.4, windowHeight * 0.15, windowWidth / 12, windowHeight / 6.5);
        robot3 = new Robot(windowWidth * 0.9, windowHeight * 0.15, windowWidth / 12, windowHeight / 6.5);

        enemies.push(robot1, robot2, robot3);

        //If no textures, just use colored platforms. Must change to false after other level
        drawColoredPlatforms = false;

        //Set up the goal for next level
        goal.x = windowWidth * 0.45;
        goal.y = windowHeight * 0.01;

        //make sure to clear restart if applicable
        restartLevel = false;
      }
      break;
    case "map8":
      if ((isCollidingObject(playerHitBox, goal) || restartLevel == true) && !checkPlayerMoveAndJump()) {
        //clean up this level
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }

        //clean up the portals
        purpleP.x = -1;
        goldP.x = -1;

        //set spawn point for next level
        playerSpawn.x = windowWidth * 0.01;
        playerSpawn.y = windowHeight * 0.01;
        spawnPlayer();

        //Set up the things for the next level
        bMusic.pause();
        bossMusic.loop();
        nextLevel.play();
        curLevel++;
        background(level2);
        platforms = GetMap(mapLevel[curLevel]);

        //enemies
        boss1 = new Boss(windowWidth * 0.9, windowHeight * 0.15, windowWidth / 9, windowHeight / 4.875);
        enemies.push(boss1);

        //If no textures, just use colored platforms. Must change to false after other level
        drawColoredPlatforms = false;

        //Set up the goal for next level
        goal.x = windowWidth * 0.45;
        goal.y = windowHeight * 0.73;

        //make sure to clear restart if applicable
        restartLevel = false;
      }
      break;
    case "boss":
      if (((isCollidingObject(playerHitBox, goal) && enemies[0].dead) || restartLevel == true) && !checkPlayerMoveAndJump()) {
        //clean up this level
        bossMusic.pause();
        bMusic.loop();

        //clear enemies
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }

        //Clear the portals
        purpleP.x = -1;
        goldP.x = -1;

        //Do the things needed for the next level
        curLevel++;

        //LEVEL UP
        drawColoredPlatforms = false;
        nextLevel.play();
        gameEnd = true;
      }
      break;
  }
}


//Sets the Player Spawn Point at the beginning of a level
function spawnPlayer() {
  player.x = playerSpawn.x;
  player.y = playerSpawn.y;
}

//Checks if player is moveing and jumping
function checkPlayerMoveAndJump() {
  if (jumped && (keyIsDown(68) || keyIsDown(65))) {
    return true;
  }
  return false;
}
