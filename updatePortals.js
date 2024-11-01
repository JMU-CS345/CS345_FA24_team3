let verticleP = false;
let verticleG = false;
function updatePortals() {
    // Update and draw all projectiles
    for (let i = projectiles.length - 1; i >= 0; i--) {
        let proj = projectiles[i];
        fill(proj.c); // Color for the projectile
        ellipse(proj.x, proj.y, 15, 15); // Draw projectile

        // Update projectile position
        proj.x += proj.vx;
        proj.y += proj.vy;

        // Check for collision with platforms
        for (let j = 0; j < platforms.length; j++) {
            if (isCollidingObject(proj, platforms[j])) {
                if (proj.c == "purple") {
                    if (verticleP) {
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
                    purpleP.verticle = verticleP;
                }
                else if (proj.c == "gold") {
                    goldP.verticle = verticleG;
                    if (verticleG) {
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
// Creates new projectile/portal
function shootPortal(direction, colorP) {
    let speed = 20;
    let vx = 0, vy = 0;
    if (projectiles.length == 1 && projectiles[0].c == colorP) {
        return;
    }
    if (direction == "up") {
        vy = -speed;
        if (colorP == 'purple') {
            verticleP = false;
        }
        else {
            verticleG = false;
        }
    }
    else if (direction == "down") {
        vy = speed;
        if (colorP == 'purple') {
            verticleP = false;
        }
        else {
            verticleG = false;
        }
    }
    else if (direction == "left") {
        vx = -speed;
        if (colorP == 'purple') {
            verticleP = true;
        }
        else {
            verticleG = true;
        }
    }
    else if (direction == "right") {
        vx = speed;
        if (colorP == 'purple') {
            verticleP = true;
        }
        else {
            verticleG = true;
        }
    }
    if (projectiles.length < 2) {
        let projectile = {
            x: player.x + player.w / 2,
            y: player.y + player.h / 2,
            w: 10,
            h: 10,
            vx: vx,
            vy: vy,
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