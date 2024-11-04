function Health() {
    let heartX = windowWidth - 150;
    let heartY = 10;
    let heartSize = 150;
    let cropWidth;

    if (player.health === 3) {
        cropWidth = 100;
    } else if (player.health === 2) {
        cropWidth = 60;
    } else if (player.health === 1) {
        cropWidth = 40;
    }

    // Draw the heart image without warping
    if (player.health > 0) {
        image(heart, heartX, heartY, cropWidth * 1.5, heartSize, 0, 0, cropWidth, 100);
    }
}
function Death() {
    if (player.dead) {
        background('black');
        fill('red');
        textSize(100);
        textFont("times new roman");
        text("You Died.", 550, 100);
        text("Press Enter to Restart", 350, 200)
        for (i = 0; i < enemies.length; i++) {
            enemies[i] = null;
            enemies.splice(i, 1);
        }
        purpleP.x = -1;
        goldP.x = -1;
        //Write code to restart level
        //Have a timer so that the death screen is only a few seconds then the map reloads
    }
}
