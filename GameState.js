/*These variables are for the "blue black hole portal" to finish each level
Initiate the x and y values for the levels portal to know when the player
contacts the portal*/

var goal1 = { x: -1, y: -1, w: 140, h: 140 };
var goaltutorial = { x: -1, y: -1, w: 140, h: 140 };
var goal3 = { x: -1, y: -1, w: 140, h: 140 };
var goal4 = { x: -1, y: -1, w: 140, h: 140 };



function GameState(state) {
  switch (state) {
    case "title":
      background("black");
      DrawMap(state);
      nextState(state);
      break;

    case "map1":
      background(level1);
      platforms = GetMap(state);
      DrawMap(state);
      nextState(state);
      break;

    case "portals_tutorial":
      background(level2);
      platforms = GetMap(state);
      DrawMap(state);
      break;

    case "map3":
      background(level3);
      platforms = GetMap(state);
      DrawMap(state);
      break;

  }
}




function nextState(state) {
  switch (state) {
    case "title":
      if (gameStart == true) {
        bMusic.loop();
        mapLevel = "map1";
        goal1.x = windowWidth * 0.7 * windowWidth / 1600;
        goal1.y = windowHeight * 0.4 * windowHeight / 900 + mapScroll;


        //The WindowHeight / 6.5 and WindowWidth / 12 are for making the enemies change size based on the screen size


        alien1 = new Alien(600, windowHeight - 120, windowWidth / 12, windowHeight / 6.5);
        alien2 = new Alien(732, 360, windowWidth / 12, windowHeight / 6.5);
        alien3 = new Alien(340, 480, windowWidth / 12, windowHeight / 6.5);
        eAlien1 = new EnragedAlien(1200, windowWidth - 120, windowWidth / 12, windowHeight / 6.5);
        robot1 = new Robot(1000, windowWidth - 120, windowWidth / 12, windowHeight / 6.5);
        enemies.push(alien1, alien2, alien3, eAlien1, robot1);
        Alien.asset = alienImage;
        EnragedAlien.asset = alienEnragedImage
        Robot.assetWalk = robotWalk;
        Laser.assetLaser = laser;
      }
      break;
    case "map1":
      //0.69 was 0.72, Hopefully this fixed this entry into portal tutorial
      if (isCollidingObject(playerHitBox, goal1) && mapLevel == "map1") {
        nextLevel.play();
        mapLevel = "portals_tutorial";
        for (i = 0; i < enemies.length; i++) {
          enemies[i] = null;
          enemies.splice(i);
        }
        background(level2);
        purpleP.x = -1;
        goldP.x = -1;


      }
      break;

    case "portals_tutorial":
      break;



  }
}
