let movement = 0;
let moveControl = 0;
let moveWait = true;

let asteriodBeltWidth = 180;
let asteriodBeltHeight = 100;
let planetWidth;
let planetHeight;


function DrawMap(map) {
  mapMovement();
  switch (map) {
    case "map1":
      image(mapAssets, windowWidth * 0.2, windowHeight * 0.75 + movement, asteriodBeltWidth, asteriodBeltHeight, 350, 473, 112, 41);
      image(mapAssets, windowWidth * 0.4 + (movement % 2), windowHeight * 0.75 + movement, 80, 80, 812, 87, 44, 48);
      image(mapAssets, windowWidth * 0.5, windowHeight * 0.6 + movement, asteriodBeltWidth, asteriodBeltHeight, 539, 474, 112, 41);

      image(mapAssets, windowWidth * 0.9, windowHeight * 0.1 + movement, 140, 140, 348, 805, 64, 56);
      ellipse(windowWidth * 0.15, windowHeight * 0.09 + movement, 120, 120);
      image(mapAssets, windowWidth * 0.1, windowHeight * 0 + movement, 140, 140, 1860, 940, 53, 50);

      image(mapAssets, windowWidth * 0.7, windowHeight * 0.4 + movement, 140, 140, 1440, 38, 49, 48);
      break;
  }



  function mapMovement() {

    if (moveControl < 100 && moveWait == true) {
      moveControl++;
      if (moveControl % 10 == 0) {
        movement++;
      }
      if (moveControl >= 100) {
        moveWait = false;
      }
    } else {
      moveControl--;
      if (moveControl % 10 == 0) {
        movement--;
      }
      if (moveControl == 0) {
        moveWait = true
      }
    }
  }

}
