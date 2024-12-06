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
        proj.x += proj.vx * 10; // Have to do this speed to prevent clipping
        proj.y += proj.vy * 10;

        // Check for collision with platforms
        for (let j = 0; j < platforms.length; j++) {
            if (isCollidingObject(proj, platforms[j])) {
                portalSound.play();
                collisionDirection = collisionDirectionObject(proj, platforms[j]);
                //console.log(collisionDirection); // DEBUGGING
                if (proj.c == "purple") {
                    if (collisionDirection == "right" || collisionDirection == "left") {
                        purpleP.y = proj.y - player.h / 2;
                        purpleP.x = proj.x;
                        purpleP.w = player.w / 5;
                        purpleP.h = player.h;
                        purpleP.vertical = true;
                    }
                    else if (collisionDirection == "top" || collisionDirection == "bottom") {
                        purpleP.y = proj.y;
                        purpleP.x = proj.x - player.h / 2;
                        purpleP.h = player.w / 5;
                        purpleP.w = player.h;
                        purpleP.vertical = false;
                    }
                    purpleP.direction = collisionDirection;
                }
                else if (proj.c == "gold") {
                    goldP.vertical = verticalG;
                    goldP.direction = collisionDirection;
                    if (collisionDirection == "right" || collisionDirection == "left") {
                        goldP.y = proj.y - player.h / 2;
                        goldP.x = proj.x;
                        goldP.w = player.w / 5;
                        goldP.h = player.h;
                        goldP.vertical = true;
                    }
                    else if (collisionDirection == "top" || collisionDirection == "bottom") {
                        goldP.y = proj.y;
                        goldP.x = proj.x - player.h / 2;
                        goldP.h = player.w / 5;
                        goldP.w = player.h;
                        goldP.vertical = false;
                    }
                    goldP.direction = collisionDirection;
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
    //Mouse Portal Calculation
    xTarget = passedMouseX - (player.x + player.w / 2);
    yTarget = passedMouseY - (player.y + player.h / 2);
    portalTarget = sqrt((xTarget * xTarget) + (yTarget * yTarget));
    // Normalize
    xTarget /= portalTarget;
    yTarget /= portalTarget;

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

    if (portalColor == "purple") {
        fill(69, 0, 132);
    }

    if (portalColor == "gold") {
        fill(203, 182, 119);
    }
    square(windowWidth - 95, 125, 35);
}
//Destroys the Portals
function destroyPortal() {
    purpleP.x = -1;
    goldP.x = -1;
    purpleP.vertical = false;
    purpleP.directon = 'none';
    goldP.vertical = false;
    goldP.directon = 'none';
}
