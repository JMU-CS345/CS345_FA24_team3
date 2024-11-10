let verticalP = false;
let verticalG = false;
let portalColor = "purple";

function updatePortals() {
    // Update and draw all projectiles
    for (let i = projectiles.length - 1; i >= 0; i--) {
        let proj = projectiles[i];
        fill(proj.c); // Color for the projectile
        ellipse(proj.x, proj.y, 15, 15); // Draw projectile

        // Update projectile position
        proj.x += proj.vx * 15;
        proj.y += proj.vy * 15;

        // Check for collision with platforms
        for (let j = 0; j < platforms.length; j++) {
            if (isCollidingObject(proj, platforms[j])) {
                collisionDirection = collisionDirectionObject(proj, platforms[j]);
                if (proj.c == "purple") {
                    if (verticalP) {
                        purpleP.y = proj.y - player.h / 2;
                        purpleP.x = proj.x;
                        purpleP.w = player.w / 5;
                        purpleP.h = player.h;
                    }
                    else {
                        purpleP.y = proj.y;
                        purpleP.x = proj.x - player.h / 2;
                        purpleP.h = player.w / 5;
                        purpleP.w = player.h;
                    }
                    purpleP.vertical = verticalP;
                    purpleP.direction = collisionDirection;
                }
                else if (proj.c == "gold") {
                    goldP.vertical = verticalG;
                    goldP.direction = collisionDirection;
                    if (verticalG) {
                        goldP.y = proj.y - player.h / 2;
                        goldP.x = proj.x;
                        goldP.w = player.w / 5;
                        goldP.h = player.h;
                    }
                    else {
                        goldP.y = proj.y;
                        goldP.x = proj.x - player.h / 2;
                        goldP.h = player.w / 5;
                        goldP.w = player.h;
                    }
                }
                projectiles.splice(i, 1); // Remove projectile on collision
                break;
            }
        }

        // Remove projectile if it goes off screen
        if (proj.x < 0 || proj.x > width || proj.y < 0 || proj.y > height) {
            projectiles.splice(i, 1); // Remove projectile if off-screen
        }
    }
}

// Creates a new portal bullet
function shootPortal(passedMouseX, passedMouseY, colorP) {
    let xTarget, yTarget;

    if (projectiles.length == 1 && projectiles[0].c == colorP) {
        return;
    }

    // Debugging purposes
    console.log("mouseX: ", passedMouseX, "mouseY: ", passedMouseY)
    console.log("playerX: ", player.x, "playerY: ", player.y)

    xTarget = passedMouseX - player.x;
    yTarget = passedMouseY - player.y;
    portalTarget = sqrt((xTarget * xTarget) + (yTarget * yTarget));
    // Normalize
    xTarget /= portalTarget;
    yTarget /= portalTarget;

    // Figure out portal bullet direction to get correct portal rotation
    // if (passedMouseY < player.y) { // up
    //     if (colorP == 'purple') {
    //         verticalP = false;
    //     }
    //     else {
    //         verticalG = false;
    //     }
    // } else if (passedMouseY > player.y) { // down
    //     if (colorP == 'purple') {
    //         verticalP = false;
    //     }
    //     else {
    //         verticalG = false;
    //     }
    // } else if (passedMouseX < player.x) { // left
    //     if (colorP == 'purple') {
    //         verticalP = true;
    //     }
    //     else {
    //         verticalG = true;
    //     }
    // } else if (passedMouseX > player.x) {
    //     if (colorP == 'purple') {
    //         verticalP = true;
    //     }
    //     else {
    //         verticalG = true;
    //     }
    // }

    if (projectiles.length < 2) {
        let projectile = {
            x: player.x + player.w / 2,
            y: player.y + player.h / 2,
            w: 10,
            h: 10,
            vx: xTarget,
            vy: yTarget,
            c: colorP
        };
        projectiles.push(projectile);
    }

}

function drawPortals() {
    if (purpleP.x != -1) {
        image(portalPurpleImage, purpleP.x, purpleP.y, purpleP.w, purpleP.h);
    }
    if (goldP.x != -1) {
        image(portalGoldImage, goldP.x, goldP.y, goldP.w, goldP.h);
    }
}

// Shoot portal with left click
function mousePressed() {
    shootPortal(mouseX, mouseY, portalColor);
}

// Change portal color by pressing Q to purple, E to gold
function changePortalColor() {
    if (keyIsDown(81)) {
        portalColor = "purple";
    }

    if (keyIsDown(69)) {
        portalColor = "gold";
    }
}
