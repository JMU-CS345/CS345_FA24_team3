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
    if (player.health != 0) {
        image(heart, heartX, heartY, cropWidth * 1.5, heartSize, 0, 0, cropWidth, 100);
    }
}
