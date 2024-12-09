


function DrawMap(map) {
  mapMovement(); //update map bounce
  switch (map) { //switch based on which map is needed
    case "title":

      //background
      image(mapAssets_SpaceStation, 0, 0, windowWidth, windowHeight, 266, 25, 535, 807);
      //Title
      image(titleScreen, windowWidth * 0.25 * windowWidth / 1600, windowHeight * 0.02 * windowHeight / 900 + mapScroll, 700, 500);

      image(mapAssets, windowWidth * 0.8 * windowWidth / 1600, windowHeight * 0.1 * windowHeight / 900 + mapScroll, 90, 90, 1680, 940, 55, 52);



      //Planets
      image(mapAssets, windowWidth * 0.8 * windowWidth / 1600, windowHeight * 0.6 * windowHeight / 900 + mapScroll, 60, 70, 340, 885, 79, 76);
      image(mapAssets, windowWidth * 0.1 * windowWidth / 1600, windowHeight * 0.9 * windowHeight / 900 + mapScroll, 90, 90, 890, 765, 57, 51);

      //Cosmetics
      image(mapAssets, windowWidth * 0.79 * windowWidth / 1600, windowHeight * 0.585 * windowHeight / 900 + mapScroll, 90, 90, 917, 354, 102, 109);
      image(mapAssets, windowWidth * 0.1 * windowWidth / 1600, windowHeight * 0.05 * windowHeight / 900 + mapScroll, 60, 70, 610, 746, 66, 65);

      //Comets
      image(mapAssets, windowWidth * 0.9 * windowWidth / 1600, windowHeight * 0.9 * windowHeight / 900 + mapScroll, 90, 90, 3, 230, 40, 50);
      image(mapAssets, windowWidth * 0.05 * windowWidth / 1600, windowHeight * 0.4 * windowHeight / 900 + mapScroll, 60, 70, 176, 59, 51, 41);


      textSize(80);
      fill("white");
      textFont(gameFont);
      //text("Press Enter!", windowWidth * 0.25 * windowWidth / 1600, windowHeight * 1.1 * windowHeight / 900 + mapScroll);
      text("Press Enter!", (windowWidth * 0.2) * windowWidth / 1600, (windowHeight * 0.8) * windowHeight / 900 + mapScroll);

      break;

    case "map1":

      //A little floating and moving rock
      image(mapAssets, windowWidth * 0.4 + (mapScroll % 2), windowHeight * 0.75 + mapScroll, 80, 80, 812, 87, 44, 48);


      image(mapAssets, windowWidth * 0.9, windowHeight * 0.1 + mapScroll, 140, 140, 348, 805, 64, 56);

      image(mapAssets, windowWidth * 0.1, windowHeight * 0 + mapScroll, 140, 140, 1860, 940, 53, 50);

      image(mapAssets, windowWidth * 0.7, windowHeight * 0.4 + mapScroll, 140, 140, 1440, 38, 49, 48);

      image(mapAssets, windowWidth * 0.1, windowHeight * 0.08 + mapScroll, windowWidth * 0.1, windowHeight * 0.09, 539, 474, 112, 41);

      image(mapAssets, windowWidth * 0.9, windowHeight * 0.2 + mapScroll, windowWidth * 0.09, windowHeight * 0.07, 346, 481, 114, 31);

      break;


    case "portals_tutorial":

      // left side wall
      image(mapAssets_SpaceStation, platforms[0].x, platforms[0].y, platforms[0].w, platforms[0].h, 181, 103, 23, 32);

      //Top Left ceiling
      image(mapAssets_SpaceStation, platforms[6].x, platforms[6].y, platforms[6].w, platforms[6].h, 145, 121, 30, 21);

      //Top Right Ceiling
      image(mapAssets_SpaceStation, platforms[2].x, platforms[2].y, platforms[2].w, platforms[2].h, 145, 121, 30, 21);

      // Right Wall
      image(mapAssets_SpaceStation, platforms[1].x, platforms[1].y, platforms[1].w, platforms[1].h, 180, 69, 22, 31);

      //Floor

      //Bottom Right Floor
      image(mapAssets_SpaceStation, platforms[7].x, platforms[7].y, platforms[7].w, platforms[7].h, 145, 94, 30, 23);

      //Bottom Left Floor
      image(mapAssets_SpaceStation, platforms[11].x, platforms[11].y, platforms[11].w, platforms[11].h, 145, 94, 30, 23);

      // Block top

      // Block filling Top
      image(mapAssets_SpaceStation, windowWidth * 0.333, 0, windowWidth * 0.27, windowHeight * 0.38, 190, 71, 10, 25);

      // Block top left wall
      image(mapAssets_SpaceStation, platforms[5].x, platforms[5].y, platforms[5].w, platforms[5].h, 180, 69, 22, 31);

      //Block top bottom wall
      image(mapAssets_SpaceStation, platforms[4].x, platforms[4].y, platforms[4].w, platforms[4].h, 145, 121, 30, 21);

      //Block top right wall
      image(mapAssets_SpaceStation, platforms[3].x, platforms[3].y, platforms[3].w, platforms[3].h, 181, 103, 23, 32);

      //Block Bottom

      //Bottom Filling Block
      image(mapAssets_SpaceStation, windowWidth * 0.35, windowHeight * 0.65, windowWidth * 0.25, windowHeight * 0.38, 190, 71, 10, 25);

      //Block Bottom right wall
      image(mapAssets_SpaceStation, platforms[8].x, platforms[8].y, platforms[8].w, platforms[8].h, 181, 103, 23, 32);

      //Block Bottom Floor
      image(mapAssets_SpaceStation, platforms[10].x, platforms[10].y, platforms[10].w, platforms[10].h, 145, 94, 30, 23);

      //Block Bottom left wall
      image(mapAssets_SpaceStation, platforms[9].x, platforms[9].y, platforms[9].w, platforms[9].h, 180, 69, 22, 31);

      //Corners

      //Block top top right corner
      image(mapAssets_SpaceStation, windowWidth * 0.597, windowHeight * 0.012, windowWidth * 0.02, windowHeight * 0.04, 145, 35, 21, 23);

      //Block top innner right corner
      image(mapAssets_SpaceStation, windowWidth * 0.597, windowHeight * 0.37, windowWidth * 0.015, windowHeight * 0.025, 208, 124, 16, 13);

      //Top Right Corner
      image(mapAssets_SpaceStation, windowWidth * 0.977, windowHeight * 0.015, windowWidth * 0.02, windowHeight * 0.04, 176, 34, 21, 24);
      image(mapAssets_SpaceStation, windowWidth * 0.99, 0, windowWidth * 0.01, windowHeight * 0.05, 190, 71, 10, 25);



      //Block Bottom left outer Corner
      image(mapAssets_SpaceStation, windowWidth * 0.331, windowHeight * 0.645, windowWidth * 0.015, windowHeight * 0.025, 208, 62, 14, 16);

      //Block top bottom left inner corner
      image(mapAssets_SpaceStation, windowWidth * 0.332, windowHeight * 0.367, windowWidth * 0.015, windowHeight * 0.029, 208, 102, 16, 16);

      // Block top left outer right corner
      image(mapAssets_SpaceStation, windowWidth * 0.325, windowHeight * 0.014, windowWidth * 0.02, windowHeight * 0.04, 176, 34, 21, 24);

      //Block Bottom right outer corner
      image(mapAssets_SpaceStation, windowWidth * 0.5995, windowHeight * 0.645, windowWidth * 0.015, windowHeight * 0.025, 207, 82, 15, 16);

      //Block Bottom inner right corner
      image(mapAssets_SpaceStation, windowWidth * 0.598, windowHeight * 0.964, windowWidth * 0.02, windowHeight * 0.04, 146, 67, 29, 22);

      //Block Bottom right Corner
      image(mapAssets_SpaceStation, windowWidth * 0.3235, windowHeight * 0.965, windowWidth * 0.02, windowHeight * 0.04, 199, 35, 23, 23);

      //Bottom Left Corner
      image(mapAssets_SpaceStation, -5, windowHeight * 0.9635, windowWidth * 0.03, windowHeight * 0.04, 146, 67, 29, 22);

      //Top Left Corner
      image(mapAssets_SpaceStation, windowWidth * 0.005, windowHeight * 0.014, windowWidth * 0.02, windowHeight * 0.04, 144, 36, 23, 23);
      image(mapAssets_SpaceStation, 0, 0, windowWidth * 0.013, windowHeight * 0.025, 190, 71, 10, 25);


      //Bottom Right Corner
      image(mapAssets_SpaceStation, windowWidth * 0.976, windowHeight * 0.965, windowWidth * 0.02, windowHeight * 0.04, 199, 35, 23, 23);


      //goal
      image(mapAssets, windowWidth * 0.2, windowHeight * 0.1 + mapScroll, 140, 140, 1440, 38, 49, 48);

      break;

    case "map3":


      //Platform Connecting
      //Top left connecting corner pieces
      image(mapAssets_SpaceStation, platforms[6].x, platforms[6].y, platforms[6].w, platforms[6].h, 181, 103, 23, 32);
      //bottom platform connecting corner pieces
      image(mapAssets_SpaceStation, platforms[11].x, platforms[11].y, platforms[11].w, platforms[11].h, 181, 103, 23, 32);

      //main map pieces
      //Right wall
      image(mapAssets_SpaceStation, platforms[0].x, platforms[0].y, platforms[0].w, platforms[0].h, 180, 69, 22, 31);

      //Top left side wall
      image(mapAssets_SpaceStation, platforms[1].x, platforms[1].y, platforms[1].w, platforms[1].h, 181, 103, 23, 32);

      //Top left platform floor
      image(mapAssets_SpaceStation, platforms[5].x, platforms[5].y, platforms[5].w, platforms[5].h, 145, 94, 30, 23);

      //Top left platform bottom
      image(mapAssets_SpaceStation, platforms[7].x, platforms[7].y, platforms[7].w, platforms[7].h, 145, 121, 30, 23);

      //Middle left wall
      image(mapAssets_SpaceStation, platforms[8].x, platforms[8].y, platforms[8].w, platforms[8].h, 181, 103, 23, 32);

      //Middle left platform top
      image(mapAssets_SpaceStation, platforms[10].x, platforms[10].y, platforms[10].w, platforms[10].h, 145, 94, 30, 23);

      //Top left platform bottom
      image(mapAssets_SpaceStation, platforms[12].x, platforms[12].y, platforms[12].w, platforms[12].h, 145, 121, 30, 23);

      //Top Left ceiling
      image(mapAssets_SpaceStation, platforms[2].x, platforms[2].y, platforms[2].w, platforms[2].h, 145, 121, 30, 21);

      //Bottom right corner floor
      image(mapAssets_SpaceStation, platforms[9].x, platforms[9].y, platforms[9].w, platforms[9].h, 145, 94, 30, 23);

      //Bottom right inner wall
      image(mapAssets_SpaceStation, platforms[3].x, platforms[3].y, platforms[3].w, platforms[3].h, 180, 69, 22, 31);

      //Top right asteriod belt
      image(mapAssets_SpaceStation, platforms[4].x, platforms[4].y, platforms[4].w, platforms[4].h, 145, 94, 30, 23);

      //Top grey area for platform
      image(mapAssets_SpaceStation, windowWidth * 0.001, windowHeight * 0.37, windowWidth * 0.03, windowHeight * 0.03, 190, 71, 10, 25);

      //Bottom right grey area
      image(mapAssets_SpaceStation, windowWidth * 0.92, windowHeight * 0.84, windowWidth * 0.09, windowHeight * 0.2, 190, 71, 10, 25);

      //Corners

      //Bottom right platform corner
      image(mapAssets_SpaceStation, windowWidth * 0.9735, windowHeight * 0.8, windowWidth * 0.025, windowHeight * 0.04, 199, 35, 23, 23);

      //Top left platform bottom corner
      image(mapAssets_SpaceStation, windowWidth * 0.0025, windowHeight * 0.389, windowWidth * 0.025, windowHeight * 0.04, 144, 36, 23, 23);
      image(mapAssets_SpaceStation, 0, windowHeight * 0.388, windowWidth * 0.009, windowHeight * 0.05, 190, 71, 10, 25);


      //Top left platform inner top corner
      image(mapAssets_SpaceStation, windowWidth * 0.149, windowHeight * 0.359, windowWidth * 0.01, windowHeight * 0.025, 238, 50, 16, 16);

      //Top left platform inner bottom corner
      image(mapAssets_SpaceStation, windowWidth * 0.149, windowHeight * 0.391, windowWidth * 0.01, windowHeight * 0.025, 236, 106, 16, 16);

      //Top left platform inner top corner
      image(mapAssets_SpaceStation, windowWidth * 0.149, windowHeight * 0.579, windowWidth * 0.01, windowHeight * 0.025, 238, 50, 16, 16);

      //Top left platform inner bottom corner
      image(mapAssets_SpaceStation, windowWidth * 0.149, windowHeight * 0.607, windowWidth * 0.01, windowHeight * 0.025, 236, 106, 16, 16);

      //Middle left outer corner
      image(mapAssets_SpaceStation, windowWidth * 0.0005, windowHeight * 0.564, windowWidth * 0.025, windowHeight * 0.04, 146, 67, 29, 22);
      image(mapAssets_SpaceStation, 0, windowHeight * 0.56, windowWidth * 0.01, windowHeight * 0.04, 190, 71, 10, 25);

      //Bottom right inner corner
      image(mapAssets_SpaceStation, windowWidth * 0.9112, windowHeight * 0.813, windowWidth * 0.01, windowHeight * 0.025, 238, 69, 16, 16);

      //Top Left Corner
      image(mapAssets_SpaceStation, windowWidth * 0.0025, windowHeight * 0.013, windowWidth * 0.025, windowHeight * 0.04, 144, 36, 23, 23);
      image(mapAssets_SpaceStation, 0, 0, windowWidth * 0.1, windowHeight * 0.02, 190, 71, 10, 25);
      image(mapAssets_SpaceStation, 0, 0, windowWidth * 0.01, windowHeight * 0.1, 190, 71, 10, 25);

      //Top platform corner
      image(mapAssets_SpaceStation, windowWidth * 0.0005, windowHeight * 0.346, windowWidth * 0.025, windowHeight * 0.04, 146, 67, 29, 25);
      image(mapAssets_SpaceStation, 0, windowHeight * 0.35, windowWidth * 0.01, windowHeight * 0.05, 190, 71, 10, 25);


      //goal
      image(mapAssets, windowWidth * 0.73, windowHeight * 0.05 + mapScroll, 140, 140, 1440, 38, 49, 48);
      break;

    case "map4":
      image(mapAssets, windowWidth * 0.93, windowHeight * 0.45 + mapScroll, 140, 140, 1440, 38, 49, 48);
      break;

    case "map5":
      mapPlatforms = GetMap(map);
      image(mapAssets, windowWidth * 0.93, windowHeight * 0.78 + mapScroll, 140, 140, 1440, 38, 49, 48);
      break;
    case "map6":
      mapPlatforms = GetMap(map);
      image(mapAssets, windowWidth * 0.93, windowHeight * 0.3 + mapScroll, 140, 140, 1440, 38, 49, 48);
      break;

    case "map7":
      //top platform left side

      //top portion
      image(mapAssets_SpaceStation, platforms[0].x, platforms[0].y, platforms[0].w, platforms[0].h, 145, 94, 30, 23);
      image(mapAssets_SpaceStation, platforms[1].x, platforms[1].y, platforms[1].w, platforms[1].h, 145, 94, 30, 23);

      //middle platform
      image(mapAssets_SpaceStation, platforms[2].x, platforms[2].y, platforms[2].w, platforms[2].h, 145, 94, 30, 23);

      //Bottom platform right
      image(mapAssets_SpaceStation, platforms[3].x, platforms[3].y, platforms[3].w, platforms[3].h, 145, 94, 30, 23);

      //Bottom platform left
      image(mapAssets_SpaceStation, platforms[4].x, platforms[4].y, platforms[4].w, platforms[4].h, 145, 94, 30, 23);


      //left platform wall
      image(mapAssets_SpaceStation, platforms[5].x, platforms[5].y, platforms[5].w, platforms[5].h, 180, 69, 22, 31);

      //right wall
      image(mapAssets_SpaceStation, platforms[6].x, platforms[6].y, platforms[6].w, platforms[6].h, 180, 69, 22, 31);

      //Bottom right corner
      image(mapAssets_SpaceStation, windowWidth * 0.9805, windowHeight * 0.738, windowWidth * 0.025, windowHeight * 0.04, 199, 35, 23, 23);
      image(mapAssets_SpaceStation, windowWidth * 0.98, windowHeight * 0.77, windowWidth * 0.02, windowHeight * 0.028, 190, 71, 10, 25);



      //goal

      image(mapAssets, windowWidth * 0.05, windowHeight * 0.8 + mapScroll, 140, 140, 1440, 38, 49, 48);
      break;

    case "map8":

      //left outer wall
      image(mapAssets_SpaceStation, platforms[0].x, platforms[0].y, platforms[0].w, platforms[0].h, 180, 69, 22, 31);

      //left inner wall
      image(mapAssets_SpaceStation, platforms[1].x, platforms[1].y, platforms[1].w, platforms[1].h, 180, 69, 22, 31);

      //right outer wall
      image(mapAssets_SpaceStation, platforms[2].x, platforms[2].y, platforms[2].w, platforms[2].h, 181, 103, 23, 32);

      //right inner wall
      image(mapAssets_SpaceStation, platforms[3].x, platforms[3].y, platforms[3].w, platforms[3].h, 181, 103, 23, 32);

      //roof
      image(mapAssets_SpaceStation, platforms[4].x, platforms[4].y, platforms[4].w, platforms[4].h, 145, 121, 30, 21);


      //left platform

      //left platform wall
      image(mapAssets_SpaceStation, platforms[5].x, platforms[5].y, platforms[5].w, platforms[5].h, 181, 103, 23, 32);

      //left platform
      image(mapAssets_SpaceStation, platforms[6].x, platforms[6].y, platforms[6].w, platforms[6].h, 145, 94, 30, 23);

      //middle platform

      //middle platform
      image(mapAssets_SpaceStation, platforms[7].x, platforms[7].y, platforms[7].w, platforms[7].h, 145, 94, 30, 23);


      //right platform

      //right platform wall
      image(mapAssets_SpaceStation, platforms[8].x, platforms[8].y, platforms[8].w, platforms[8].h, 180, 69, 22, 31);

      //right platform
      image(mapAssets_SpaceStation, platforms[9].x, platforms[9].y, platforms[9].w, platforms[9].h, 145, 94, 30, 23);



      // corners

      //Top left corner
      image(mapAssets_SpaceStation, windowWidth * 0.0065, windowHeight * 0.019, windowWidth * 0.025, windowHeight * 0.04, 144, 36, 23, 23);
      image(mapAssets_SpaceStation, 0, 0, windowWidth * 0.03, windowHeight * 0.025, 190, 71, 10, 25);

      //Bottom left corner
      image(mapAssets_SpaceStation, windowWidth * 0.0035, windowHeight * 0.236, windowWidth * 0.025, windowHeight * 0.04, 146, 67, 29, 22);
      image(mapAssets_SpaceStation, 0, windowHeight * 0.236, windowWidth * 0.01, windowHeight * 0.04, 190, 71, 10, 25);


      //Bottom right corner
      image(mapAssets_SpaceStation, windowWidth * 0.971, windowHeight * 0.237, windowWidth * 0.025, windowHeight * 0.04, 199, 35, 23, 23);
      image(mapAssets_SpaceStation, windowWidth * 0.99, windowHeight * 0.23, windowWidth * 0.01, windowHeight * 0.04, 190, 71, 10, 25);


      //Top Right Corner
      image(mapAssets_SpaceStation, windowWidth * 0.9715, windowHeight * 0.017, windowWidth * 0.025, windowHeight * 0.05, 176, 34, 21, 24);
      image(mapAssets_SpaceStation, windowWidth * 0.97, 0, windowWidth * 0.03, windowHeight * 0.02, 190, 71, 10, 25);

      //goal
      image(mapAssets, windowWidth * 0.45, windowHeight * 0.01 + mapScroll, 140, 140, 1440, 38, 49, 48);
      break;

    case "boss":
      //right wall
      image(mapAssets_SpaceStation, platforms[0].x, platforms[0].y, platforms[0].w, platforms[0].h, 180, 69, 22, 31);

      //left wall
      image(mapAssets_SpaceStation, platforms[1].x, platforms[1].y, platforms[1].w, platforms[1].h, 181, 103, 23, 32);

      //floor
      image(mapAssets_SpaceStation, platforms[2].x, platforms[2].y, platforms[2].w, platforms[2].h, 145, 94, 30, 23);

      //roof
      image(mapAssets_SpaceStation, platforms[3].x, platforms[3].y, platforms[3].w, platforms[3].h, 145, 121, 30, 21);

      //left platform
      image(mapAssets_SpaceStation, platforms[4].x, platforms[4].y, platforms[4].w, platforms[4].h, 145, 94, 30, 23);

      //right platform
      image(mapAssets_SpaceStation, platforms[5].x, platforms[5].y, platforms[5].w, platforms[5].h, 145, 94, 30, 23);


      //corners

      //top right corner
      image(mapAssets_SpaceStation, windowWidth * 0.9715, windowHeight * 0.017, windowWidth * 0.025, windowHeight * 0.05, 176, 34, 21, 24);
      image(mapAssets_SpaceStation, windowWidth * 0.99, 0, windowWidth * 0.01, windowHeight * 0.05, 190, 71, 10, 25);


      //top left corner
      image(mapAssets_SpaceStation, windowWidth * 0.0065, windowHeight * 0.019, windowWidth * 0.025, windowHeight * 0.04, 144, 36, 23, 23);
      image(mapAssets_SpaceStation, 0, 0, windowWidth * 0.01, windowHeight * 0.05, 190, 71, 10, 25);


      //Bottom left corner
      image(mapAssets_SpaceStation, windowWidth * 0.001, windowHeight * 0.963, windowWidth * 0.03, windowHeight * 0.045, 146, 67, 29, 22);
      image(mapAssets_SpaceStation, 0, windowHeight * 0.96, windowWidth * 0.01, windowHeight * 0.04, 190, 71, 10, 25);


      //Bottom right corner
      image(mapAssets_SpaceStation, windowWidth * 0.971, windowHeight * 0.967, windowWidth * 0.025, windowHeight * 0.04, 199, 35, 23, 23);
      image(mapAssets_SpaceStation, windowWidth * 0.99, windowHeight * 0.9, windowWidth * 0.01, windowHeight * 0.04, 190, 71, 10, 25);

      //goal
      if (enemies[0].dead) {
        image(mapAssets, windowWidth * 0.45, windowHeight * 0.73 + mapScroll, 140, 140, 1440, 38, 49, 48);
      }

      break;

    case "end":
      //background
      image(mapAssets_SpaceStation, 0, 0, windowWidth, windowHeight, 266, 25, 535, 807);

      image(mapAssets, windowWidth * 0.8 * windowWidth / 1600, windowHeight * 0.1 * windowHeight / 900 + mapScroll, 90, 90, 1680, 940, 55, 52);



      //Planets
      image(mapAssets, windowWidth * 0.8 * windowWidth / 1600, windowHeight * 0.6 * windowHeight / 900 + mapScroll, 60, 70, 340, 885, 79, 76);
      image(mapAssets, windowWidth * 0.1 * windowWidth / 1600, windowHeight * 0.9 * windowHeight / 900 + mapScroll, 90, 90, 890, 765, 57, 51);

      //Cosmetics
      image(mapAssets, windowWidth * 0.79 * windowWidth / 1600, windowHeight * 0.585 * windowHeight / 900 + mapScroll, 90, 90, 917, 354, 102, 109);
      image(mapAssets, windowWidth * 0.1 * windowWidth / 1600, windowHeight * 0.05 * windowHeight / 900 + mapScroll, 60, 70, 610, 746, 66, 65);

      //Comets
      image(mapAssets, windowWidth * 0.9 * windowWidth / 1600, windowHeight * 0.9 * windowHeight / 900 + mapScroll, 90, 90, 3, 230, 40, 50);
      image(mapAssets, windowWidth * 0.05 * windowWidth / 1600, windowHeight * 0.4 * windowHeight / 900 + mapScroll, 60, 70, 176, 59, 51, 41);


      textSize(40);
      fill("white");
      textFont(gameFont);
      text("YOU ARE THE GALAXY MASTER!", (windowWidth * 0.15) * windowWidth / 1600, windowHeight / 2.3 + mapScroll);
      textSize(25);
      text("   Credits:\nNicholas Drake\nLance Bender\nBen Cook\nDaniel Grasmeder\nJohn Adams", windowWidth / 2.7, windowHeight / 1.5 + mapScroll)
      break;

    case "death":
      //background
      image(mapAssets_SpaceStation, 0, 0, windowWidth, windowHeight, 266, 25, 535, 807);
      fill('red');
      textSize(60);
      textFont(gameFont);
      text("  You Died.", (windowWidth * 0.25) * windowWidth / 1600, (windowHeight * 0.3) * windowHeight / 900);
      text("Press Enter to Restart", (windowWidth * 0.05) * windowWidth / 1600, (windowHeight * 0.5) * windowHeight / 900)
  }

}



//just supposed to be a small bounce to make our maps more alive

// the variable that will hold the small movement
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
      //every time you get a number divisible by 10 subtract a pixel from the asset
      mapScroll--;
    } //when you get to zero the bounce is complete
    if (moveControl == 0) {
      moveWait = true
    }
  }
}
