function Teleportation() {
    //Teleportation
    if (purpleP.x != -1 && goldP.x != -1) {
        if (isCollidingPlayer(player, playerHitBox, purpleP)) {
            if (purpleP.verticle) {
                if (curDirection == 'right' && goldP.verticle) {
                    player.x = goldP.x + 20;
                    player.y = goldP.y - goldP.h;
                }
                else if (curDirection == 'left' && goldP.verticle) {
                    player.x = goldP.x - 20;
                    player.y = goldP.y - goldP.h;
                }
            } else if (!purpleP.verticle) {
                if (curDirection == "up" && !goldP.verticle) {
                    player.x = goldP.x + player.h / 2;
                    player.y = goldP.y + 20;
                }
                else if (curDirection == "down" && !goldP.verticle) {
                    player.x = goldP.x + player.h / 2;
                    player.y = goldP.y - 20;
                }
            }
            else {
                player.x = gold.x;
                player.y = gold.y;
            }
        }
        if (isCollidingPlayer(player, playerHitBox, goldP)) {
            if (goldP.verticle) {
                if (curDirection == 'right' && purpleP.verticle) {
                    player.x = purpleP.x + 20;
                    player.y = purpleP.y - purpleP.h;
                }
                else if (curDirection == 'left' && purpleP.verticle) {
                    player.x = purpleP.x - 20;
                    player.y = purpleP.y - purpleP.h;
                }
            } else if (!goldP.verticle) {
                if (curDirection == "up" && !purpleP.verticle) {
                    player.x = purpleP.x + player.h / 2;
                    player.y = purpleP.y + 20;
                }
                else if (curDirection == "down" && !purpleP.verticle) {
                    player.x = purpleP.x + player.h / 2;
                    player.y = purpleP.y - 20;
                }
            }
            else {
                player.x = gold.x;
                player.y = gold.y;
            }
        }
    }
}