var canTeleport = true;
var teleportationtimer = 0;

const voidDuration = 1000; // in deltaTime, (0.5 seconds)

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
                        player.x = exit.x - 100;
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
                        player.x = exit.x - 100;
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