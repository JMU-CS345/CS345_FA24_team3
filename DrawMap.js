



let newLevel = true;

var mapPlatforms;

function DrawMap(map) {
  mapMovement(); //update map bounce
  switch (map) { //switch based on which map is needed
    case "title":

      //background
      image(mapAssets_SpaceStation, 0, 0, windowWidth, windowHeight, 266, 25, 535, 807);
      //Title
      image(titleScreen, windowWidth * 0.25, windowHeight * 0.02 + mapScroll, 700, 500);

      image(mapAssets, windowWidth * 0.8, windowHeight * 0.1 + mapScroll, 90, 90, 1680, 940, 55, 52);



      //Planets
      image(mapAssets, windowWidth * 0.8, windowHeight * 0.6 + mapScroll, 60, 70, 340, 885, 79, 76);
      image(mapAssets, windowWidth * 0.15, windowHeight * 0.7 + mapScroll, 90, 90, 890, 765, 57, 51);

      //Cosmetics
      image(mapAssets, windowWidth * 0.79, windowHeight * 0.585 + mapScroll, 90, 90, 917, 354, 102, 109);
      image(mapAssets, windowWidth * 0.1, windowHeight * 0.05 + mapScroll, 60, 70, 610, 746, 66, 65);

      //Comets
      image(mapAssets, windowWidth * 0.9, windowHeight * 0.25 + mapScroll, 90, 90, 3, 230, 40, 50);
      image(mapAssets, windowWidth * 0.05, windowHeight * 0.4 + mapScroll, 60, 70, 176, 59, 51, 41);


      textSize(100);
      fill("white");
      textFont("Courier New");
      text("Press Enter!", windowWidth * 0.25, windowHeight * 0.9 + mapScroll);

      break;

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

    case "map3":
      //Right wall
      image(mapAssets_SpaceStation, 1510, 0, 30, 650, 180, 69, 22, 31);


      //Top left side wall
      image(mapAssets_SpaceStation, 0, 30, 30, 250, 181, 103, 23, 32);

      //Top platform corner
      image(mapAssets_SpaceStation, 4, 260, 30, 30, 146, 67, 29, 22);
      image(mapAssets_SpaceStation, 0, 260, 20, 30, 190, 71, 10, 25);

      //Top left platform floor
      image(mapAssets_SpaceStation, 34, 272, 200, 30, 145, 94, 30, 23);

      //Top left platform inner top corner
      image(mapAssets_SpaceStation, 222, 272, 16, 16, 238, 50, 16, 16);

      //Top left connecting corner pieces
      image(mapAssets_SpaceStation, 209, 287, 30, 15, 181, 103, 23, 32);

      //Top left platform inner bottom corner
      image(mapAssets_SpaceStation, 221, 296, 16, 16, 236, 106, 16, 16);

      //Top left platform bottom
      image(mapAssets_SpaceStation, 30, 285, 200, 30, 145, 121, 30, 23);

      //Top left platform bottom corner
      image(mapAssets_SpaceStation, 7.5, 293, 30, 30, 144, 36, 23, 23);
      image(mapAssets_SpaceStation, 0, 290, 20, 40, 190, 71, 10, 25);

      //Top grey area for platform
      image(mapAssets_SpaceStation, 5, 290, 30, 10, 190, 71, 10, 25);

      //Middle left wall
      image(mapAssets_SpaceStation, 0, 320, 30, 120, 181, 103, 23, 32);

      //Middle left outer corner
      image(mapAssets_SpaceStation, 4, 425, 30, 30, 146, 67, 29, 22);
      image(mapAssets_SpaceStation, 0, 425, 20, 30, 190, 71, 10, 25);

      //Middle left platform
      image(mapAssets_SpaceStation, 34, 437, 200, 30, 145, 94, 30, 23);

      //Top left platform inner top corner
      image(mapAssets_SpaceStation, 222, 437, 16, 16, 238, 50, 16, 16);

      //Top left platform inner bottom corner
      image(mapAssets_SpaceStation, 222, 458, 16, 16, 236, 106, 16, 16);

      //Top left connecting corner pieces
      image(mapAssets_SpaceStation, 210, 448, 30, 15, 181, 103, 23, 32);

      //Top left platform bottom
      image(mapAssets_SpaceStation, 0, 447, 230, 30, 145, 121, 30, 23);

      //Top Left Corner
      image(mapAssets_SpaceStation, 7.5, 0, 30, 30, 144, 36, 23, 23);
      image(mapAssets_SpaceStation, 0, 0, 20, 30, 190, 71, 10, 25);

      //Top Left ceiling
      image(mapAssets_SpaceStation, 25, -10, 200, 30, 145, 121, 30, 21);

      //Bottom right platform corner
      image(mapAssets_SpaceStation, 1499, 600, 29, 30, 199, 35, 23, 23);
      image(mapAssets_SpaceStation, 1520, 600, 20, 30, 190, 71, 10, 25);

      //Bottom right corner floor
      image(mapAssets_SpaceStation, 1400, 611, 110, 30, 145, 94, 30, 23);

      //Bottom right inner corner
      image(mapAssets_SpaceStation, 1400, 610, 17, 17, 238, 69, 16, 16);

      //Bottom right inner wall
      image(mapAssets_SpaceStation, 1400, 625, 30, 125, 180, 69, 22, 31);

      //Bottom right grey area
      image(mapAssets_SpaceStation, 1425, 625, 150, 150, 190, 71, 10, 25);

      //Top right asteriod belt
      image(mapAssets, 925, 275 + mapScroll, 450, 50, 346, 481, 114, 31);

      break;
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
