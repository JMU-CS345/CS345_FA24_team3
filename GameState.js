



function GameState(state) {
  switch (state) {
    case "title":

      break;

    case "map1":
      background(level1);
      platforms = GetMap(state);
      DrawMap(state);
      nextState(state);
      break;

    case "portals_tutorial":
      background(level2);
      DrawMap(state);
      break;

  }
}




function nextState(state) {
  switch (state) {
    case "title":
      break;
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
      break;

    case "portals_tutorial":
      break;



  }
}
