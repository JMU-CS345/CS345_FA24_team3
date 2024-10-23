function PlayerMovement() {
    if (keyIsDown(68) && player.x < windowWidth - player.w && !crouched) { // move right
        image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight, frameWidth, frameHeight);
        if (keyIsDown(16)) {
            player.x = player.x + 5;
            currentFrame = floor(frame) % 8;
            frame = frame + 0.2;
        }
        else {
            player.x = player.x + 2;
            currentFrame = floor(frame) % 8;
            frame = frame + 0.1;
        }

    }
    else if (keyIsDown(65) && player.x > 0 && !crouched) { // move left
        image(playerReverse, player.x, player.y, player.w, player.h, frameWidth * currentFrame, frameHeight, frameWidth, frameHeight);
        if (keyIsDown(16)) {
            player.x = player.x - 5;
            currentFrame = floor(frame) % 8;
            frame = frame + 0.2;
        }
        else {
            player.x = player.x - 2;
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
    else { //Idel 
        image(playerImage, player.x, player.y, player.w, player.h, frameWidth * currentFrame, 0, frameWidth, frameHeight);
        currentFrame = floor(frame) % 2;
        frame = frame + 0.05;
    }
}