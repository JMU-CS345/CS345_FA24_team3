



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


    case "portals_tutorial":
      // left side wall
      image(mapAssets_SpaceStation, 0, 30, 30, 730, 181, 103, 23, 32);

      //Top Left ceiling
      image(mapAssets_SpaceStation, 25, -10, 475, 30, 145, 121, 30, 21);

      //Top Right Ceiling
      image(mapAssets_SpaceStation, 920, -10, 600, 30, 145, 121, 30, 21);


      //Bottom Left Corner
      image(mapAssets_SpaceStation, 4, 720, 30, 30, 146, 67, 29, 22);
      image(mapAssets_SpaceStation, 0, 720, 20, 30, 190, 71, 10, 25);

      //Top Left Corner
      image(mapAssets_SpaceStation, 7.5, 0, 30, 30, 144, 36, 23, 23);
      image(mapAssets_SpaceStation, 0, 0, 20, 30, 190, 71, 10, 25);

      //Top Right Corner
      image(mapAssets_SpaceStation, 1500, -2, 30, 35, 176, 34, 21, 24);
      image(mapAssets_SpaceStation, 1520, 0, 20, 30, 190, 71, 10, 25);

      // Right Wall
      image(mapAssets_SpaceStation, 1510, 25, 30, 710, 180, 69, 22, 31);

      //Bottom Right Corner
      image(mapAssets_SpaceStation, 1499, 720, 29, 30, 199, 35, 23, 23);
      image(mapAssets_SpaceStation, 1520, 720, 20, 30, 190, 71, 10, 25);

      //Floor

      //Bottom Right Floor
      image(mapAssets_SpaceStation, 945, 731, 560, 31, 145, 94, 30, 23);

      //Bottom Left Floor
      image(mapAssets_SpaceStation, 200, 731, 325, 31, 145, 94, 30, 23);

      // Block top

      // Block filling Top
      image(mapAssets_SpaceStation, 510, -2, 400, 300, 190, 71, 10, 25);

      // Block top left outer right corner
      image(mapAssets_SpaceStation, 500, -2, 30, 35, 176, 34, 21, 24);
      image(mapAssets_SpaceStation, 520, -2, 20, 30, 190, 71, 10, 25);

      //Block  top bottom left inner right corner
      image(mapAssets_SpaceStation, 510, 275, 22, 20, 208, 102, 16, 16);


      // Block top left wall
      image(mapAssets_SpaceStation, 510, 25, 30, 255, 180, 69, 22, 31);


      //Block top bottom wall
      image(mapAssets_SpaceStation, 520, 265, 400, 30, 145, 121, 30, 21);

      //Block top bottom innner right inner left corner
      image(mapAssets_SpaceStation, 920, 273, 20, 22, 208, 124, 16, 13);

      //Block top right wall
      image(mapAssets_SpaceStation, 910, 25, 30, 260, 181, 103, 23, 32);

      //Block top top right corner
      image(mapAssets_SpaceStation, 918, -2, 29, 30, 145, 35, 21, 23);
      image(mapAssets_SpaceStation, 910, -2, 20, 30, 190, 71, 10, 25);

      //Block Bottom

      //Bottom Filling Block
      image(mapAssets_SpaceStation, 520, 500, 400, 300, 190, 71, 10, 25);

      //Block Bottom inner right corner
      image(mapAssets_SpaceStation, 918, 719, 35, 30, 146, 67, 29, 22);

      //Block Bottom right wall
      image(mapAssets_SpaceStation, 916, 500, 30, 230, 181, 103, 23, 32);

      //Block Bottom right outer corner
      image(mapAssets_SpaceStation, 925, 482, 20, 20, 207, 82, 15, 16);

      //Block Bottom Floor
      image(mapAssets_SpaceStation, 520, 482, 410, 30, 145, 94, 30, 23);

      //Block Bottom left outer Corner
      image(mapAssets_SpaceStation, 510, 481, 20, 20, 208, 62, 14, 16);

      //Block Bottom left wall
      image(mapAssets_SpaceStation, 510, 490, 30, 230, 180, 69, 22, 31);

      //Block Bottom right Corner
      image(mapAssets_SpaceStation, 499, 720, 29, 30, 199, 35, 23, 23);
      //image(mapAssets_SpaceStation, 1520, 720, 20, 30, 190, 71, 10, 25);


      break;
  }
}
