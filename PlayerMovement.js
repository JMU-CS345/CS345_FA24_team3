let walkingSpeed = 4;
let sprintingSpeed = 8;

function PlayerMovement() {
  if (keyIsDown(68) && player.x < windowWidth - 100 && !crouched) { // move right
    curDirection = 'right';
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
  else if (keyIsDown(65) && player.x > -50 && !crouched) { // move left
    curDirection = 'left';
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
  else if (jumped && !crouched) { //Jumping
    if (keyIsDown(65)) {
      image(playerReverse, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight * jumping, frameWidth, frameHeight);
    }
    else {
      image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight * jumping, frameWidth, frameHeight);
    }
    currentFrame = floor(frame) % 8;
    frame = frame + 0.2;
  }
  else if (crouched) { //Crouching
    image(playerImage, player.x, player.y, player.w, player.h, frameWidth * 7, frameHeight * 4, frameWidth, frameHeight);
  }
  else { //Idle
    image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, 0, frameWidth, frameHeight);
    currentFrame = floor(frame) % 2;
    frame = frame + 0.05;
  }
}
