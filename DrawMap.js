



let newLevel = true;

var mapPlatforms;

function DrawMap(map) {
  mapMovement(); //update map bounce
  switch (map) { //switch based on which map is needed
    case "map1":

      mapPlatforms = GetMap(map);

      //the first platform
      //an asteriod belt to jump on.
      image(mapAssets, mapPlatforms[0].x, mapPlatforms[0].y + mapScroll, mapPlatforms[0].w, mapPlatforms[0].h, 346, 481, 114, 31);

      //A little floating and moving rock
      image(mapAssets, windowWidth * 0.4 + (mapScroll % 2), windowHeight * 0.75 + mapScroll, 80, 80, 812, 87, 44, 48);

      //The second platform to jump on
      image(mapAssets, mapPlatforms[1].x, mapPlatforms[1].y + mapScroll, mapPlatforms[1].w, mapPlatforms[1].h, 539, 474, 112, 41);

      image(mapAssets, windowWidth * 0.9, windowHeight * 0.1 + mapScroll, 140, 140, 348, 805, 64, 56);

      image(mapAssets, windowWidth * 0.1, windowHeight * 0 + mapScroll, 140, 140, 1860, 940, 53, 50);

      image(mapAssets, windowWidth * 0.7, windowHeight * 0.4 + mapScroll, 140, 140, 1440, 38, 49, 48);
      break;
  }
}
