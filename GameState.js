



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
        mapLevel = "map1";
        alien1 = new Alien(600, windowHeight - 120, 120, 120);
        alien2 = new Alien(732, 360, 120, 120);
        alien3 = new Alien(340, 480, 120, 120);
        eAlien1 = new EnragedAlien(1200, windowWidth - 120, 120, 120);
        robot1 = new Robot(1000, windowWidth - 120, 120, 120);
        enemies.push(alien1, alien2, alien3, eAlien1, robot1);
        Alien.asset = alienImage;
        EnragedAlien.asset = alienEnragedImage
        Robot.assetWalk = robotWalk;
        Laser.assetLaser = laser;
      }
      break;
    case "map1":
      //0.69 was 0.72, Hopefully this fixed this entry into portal tutorial
      if (playerHitBox.y > windowHeight * 0.457 + mapScroll && playerHitBox.y < windowHeight * 0.457 + mapScroll + 80 && playerHitBox.x > windowWidth * 0.69 && playerHitBox.x < windowWidth * 0.69 + 80 && mapLevel == "map1") {
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
