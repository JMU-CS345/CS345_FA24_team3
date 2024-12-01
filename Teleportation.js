var canTeleportPlayer = true;
var canTeleport = true;
var teleportationtimer = 0;

const voidDuration = 1000; // in deltaTime, (1 second)

function Teleportation() {
    // If teleportation is on cooldown, update the timer
    if (!canTeleport) {
        teleportationtimer += deltaTime;
        if (teleportationtimer >= voidDuration) {
            teleportationtimer = 0;
            canTeleport = true;
        }
        return; // exit early to prevent teleportation during cooldown
    }
    // Array of portal pairs to loop through
    const portals = [
        { entry: purpleP, exit: goldP },
        { entry: goldP, exit: purpleP }
    ];
    for (const portal of portals) {
        const { entry, exit } = portal;

        // Check if player collides with the entry portal
        if (isCollidingPlayer(player, playerHitBox, entry) && purpleP.x != -1 && goldP.x != -1) {
            if (entry.vertical) {
                if (exit.vertical) { // Entry is vertical, Exit is vertical
                    if (exit.direction === 'left') {
                        player.x = exit.x - 200;
                    } else {
                        player.x = exit.x + exit.w;
                    }
                    player.y = exit.y;
                } else { // Entry is vertical, Exit is horizontal
                    if (exit.direction === 'bottom') {
                        player.x = exit.x;
                        player.y = exit.y + exit.h;
                    } else {
                        player.x = exit.x;
                        player.y = exit.y - 150;
                    }
                }
            } else { // Entry is horizontal
                if (exit.vertical) { // Exit is vertical
                    if (exit.direction === 'left') {
                        player.x = exit.x - 200;
                    } else {
                        player.x = exit.x + exit.w;
                    }
                    player.y = exit.y;
                } else { // Exit is horizontal
                    if (exit.direction === 'bottom') {
                        player.x = exit.x;
                        player.y = exit.y + exit.h;
                    } else {
                        player.x = exit.x;
                        player.y = exit.y - 150;
                    }
                }
            }

            // Disable teleportation and break out of the loop after teleporting
            canTeleport = false;
            break;
        }
    }

}
function enemyTeleport(enemy) {
    // Array of portal pairs to loop through
    const portals = [
        { entry: purpleP, exit: goldP },
        { entry: goldP, exit: purpleP }
    ];

    for (const portal of portals) {
        const { entry, exit } = portal;
        // Skip enemies that are on cooldown
        if (!enemy.canTeleport) {
            enemy.teleportationTimer += deltaTime;
            if (enemy.teleportationTimer >= voidDuration) {
                enemy.teleportationTimer = 0;
                enemy.canTeleport = true;
            }
            continue; // Skip to the next enemy
        }
        if (isCollidingObject(enemy, entry) && purpleP.x != -1 && goldP.x != -1) {
            //console.log(`Enemy collided with ${entry === purpleP ? 'Purple' : 'Gold'} portal`);
            enemy.v = 0;
            if (entry.vertical) {
                if (exit.vertical) { // Entry is vertical, Exit is vertical
                    if (exit.direction === 'left') {
                        enemy.x = exit.x - 200;
                        enemy.direction = -1;
                    } else {
                        enemy.x = exit.x + exit.w;
                        enemy.direction = 1;
                    }
                    enemy.y = exit.y;
                } else { // Entry is vertical, Exit is horizontal
                    if (exit.direction === 'bottom') {
                        enemy.x = exit.x;
                        enemy.y = exit.y + exit.h;
                    } else {
                        enemy.x = exit.x;
                        enemy.y = exit.y - 150;
                    }
                }
            } else { // Entry is horizontal
                if (exit.vertical) { // Exit is vertical
                    if (exit.direction === 'left') {
                        enemy.x = exit.x - 200;
                        enemy.direction = -1;
                    } else {
                        enemy.x = exit.x + exit.w;
                        enemy.direction = 1;
                    }
                    enemy.y = exit.y;
                } else { // Exit is horizontal
                    if (exit.direction === 'bottom') {
                        enemy.x = exit.x;
                        enemy.y = exit.y + exit.h;
                    } else {
                        enemy.x = exit.x;
                        enemy.y = exit.y - 150;
                    }
                }
            }
            //console.log(`Enemy teleported to ${enemy.x}, ${enemy.y}`);
            enemy.canTeleport = false;

            // Disable teleportation and break out of the loop after teleporting
        }
    }
}
function fistTeleport(enemy) {
    const portals = [
        { entry: purpleP, exit: goldP },
        { entry: goldP, exit: purpleP }
    ];
    if (enemy instanceof Boss && enemy.projectile instanceof Fist) {
        for (const portal of portals) {
            const { entry, exit } = portal;
            if (isCollidingObject(enemy.projectile, entry) && purpleP.x != -1 && goldP.x != -1) {
                //console.log(`Enemy collided with ${entry === purpleP ? 'Purple' : 'Gold'} portal`);
                if (entry.vertical) {
                    if (exit.vertical) { // Entry is vertical, Exit is vertical
                        if (exit.direction === 'left') {
                            enemy.projectile.x = exit.x - 200;
                        } else {
                            enemy.projectile.x = exit.x + exit.w;
                        }
                        enemy.projectile.y = exit.y;
                    } else { // Entry is vertical, Exit is horizontal
                        if (exit.direction === 'bottom') {
                            enemy.projectile.x = exit.x;
                            enemy.projectile.y = exit.y + exit.h;
                        } else {
                            enemy.projectile.x = exit.x;
                            enemy.projectile.y = exit.y - 150;
                        }
                    }
                } else { // Entry is horizontal
                    if (exit.vertical) { // Exit is vertical
                        if (exit.direction === 'left') {
                            enemy.projectile.x = exit.x - 200;
                        } else {
                            enemy.projectile.x = exit.x + exit.w;
                        }
                        enemy.projectile.y = exit.y;
                    } else { // Exit is horizontal
                        if (exit.direction === 'bottom') {
                            enemy.projectile.x = exit.x;
                            enemy.projectile.y = exit.y + exit.h;
                        } else {
                            enemy.projectile.x = exit.x;
                            enemy.projectile.y = exit.y - 150;
                        }
                    }
                }

                // Disable teleportation and break out of the loop after teleporting
            }
        }
    }
}