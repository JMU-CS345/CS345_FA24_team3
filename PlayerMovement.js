let walkingSpeed = 4;
let sprintingSpeed = 8;
let frameWidth = 24;
let frameHeight = 24;
let lastDir;

function PlayerMovement() {
  if (keyIsDown(68) && player.x < windowWidth - 100 && !crouched && !player.dead) { // move right
    curDirection = 'right';
    lastDir = 'right';
    moving = true;
    image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight, frameWidth, frameHeight);
    if (keyIsDown(16)) {
      player.x = player.x + sprintingSpeed;
      currentFrame = floor(frame) % 8;
      frame = frame + 0.2;
    }
    else {
      player.x = player.x + walkingSpeed;
      currentFrame = floor(frame) % 8;
      frame = frame + 0.1;
    }

  }
  else if (keyIsDown(65) && player.x > -50 && !crouched && !player.dead) { // move left
    curDirection = 'left';
    lastDir = 'left';
    player.moving = true;
    image(playerReverse, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight, frameWidth, frameHeight);
    if (keyIsDown(16)) {
      player.x = player.x - sprintingSpeed;
      currentFrame = floor(frame) % 8;
      frame = frame + 0.2;
    }
    else {
      player.x = player.x - walkingSpeed;
      currentFrame = floor(frame) % 8;
      frame = frame + 0.1;
    }
  }
  else if (jumped && !crouched && !player.dead) { //Jumping
    player.moving = false;
    if ((keyIsDown(65)) || lastDir == 'left'){
      image(playerReverse, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight * jumping, frameWidth, frameHeight);
    }
    else {
      image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight * jumping, frameWidth, frameHeight);
    }
    currentFrame = floor(frame) % 8;
    frame = frame + 0.2;
  }
  else if (crouched && !player.dead) { //Crouching
    if (lastDir == 'left') {
      image(playerReverse, player.x, player.y, player.w, player.h, frameWidth, frameHeight * 3, frameWidth, frameHeight);
    } else {
      image(playerImage, player.x, player.y, player.w, player.h, frameWidth, frameHeight * 3, frameWidth, frameHeight);
    }
    player.moving = false;
  }
  else if (!player.dead) { //Idle
    /*if (lastDir == 'left') {
      image(playerReverse, player.x, player.y, player.w, player.h, frameWidth * currentFrame, 0, frameWidth, frameHeight);
      currentFrame = (floor(frame) % 2) + 6;
      frame = frame - 0.05;
    } else {
    */
    image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, 0, frameWidth, frameHeight);
    currentFrame = floor(frame) % 2;
    frame = frame + 0.05;
    player.moving = false;
  }
  else {
    image(playerImage, player.x, player.y, player.w, player.h, frameWidth * 7, frameHeight * 4, frameWidth, frameHeight);
  }

}
