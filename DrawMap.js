let movement = 0;
let moveControl = 0;
let moveWait = true;


function DrawMap(map) {
  mapMovement();
  switch (map) {
    case "map1":
      image(mapAssets, windowWidth * 0.2, windowHeight * 0.75 + movement, 180, 100, 350, 473, 112, 41);
      image(mapAssets, windowWidth * 0.4 + (movement % 2), windowHeight * 0.75 + movement, 80, 80, 812, 87, 44, 48);
      image(mapAssets, windowWidth * 0.5, windowHeight * 0.6 + movement, 280, 100, 539, 474, 112, 41);

      image(mapAssets, windowWidth * 0.9, windowHeight * 0.1 + movement, 140, 140, 348, 805, 64, 56);

      image(mapAssets, windowWidth * 0.1, windowHeight * 0 + movement, 140, 140, 1860, 940, 51, 50);
      ellipse(windowWidth * 0.1, windowHeight * 0 + movement, 20, 20);
      image(mapAssets, windowWidth * 0.75, windowHeight * 0.4 + movement, 140, 140, 1440, 38, 49, 48);
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
