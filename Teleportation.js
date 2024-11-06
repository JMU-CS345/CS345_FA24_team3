function Teleportation() {
    //Teleportation
    if (purpleP.x != -1 && goldP.x != -1) {
        if (isCollidingPlayer(player, playerHitBox, purpleP)) {
            if (purpleP.vertical) {
                if (goldP.vertical) { //Enter Portal is Vertical and Exit Portal is Vertical
                    if (goldP.direction == 'left') { //Portal on left side of platform
                        player.x = goldP.x - 10
                        player.y = goldP.y + (goldP.h / 2);
                    }
                    else { // Portal on right side of platform
                        player.x = goldP.x + (goldP.w + 10);
                        player.y = goldP.y + (goldP.h / 2);
                    }
                }
                else if (!goldP.vertical) { // Enter portal is Vertical and Exit Portal is not
                    if (goldP.direction == 'bottom') { // Portal is below platform 
                        player.x = goldP.x;
                        player.y = goldP.y + (10 + goldP.h);
                    }
                    else { // Portal above platform
                        player.x = goldP.x;
                        player.y = goldP.y - 10;
                    }
                }
            }
            else if (!purpleP.vertical) {
                if (goldP.vertical) { // Enter portal is not vertical and Exit portal is vertical 
                    if (goldP.direction == 'left') {//Portal on left side of platform
                        player.x = goldP.x - 10;
                        player.y = goldP.y + (goldP.h / 2);
                    }
                    else {// Portal on right side of platform
                        player.x = goldP.x + (goldP.w + 10);
                        player.y = goldP.y + (goldP.h / 2);
                    }
                }
                else if (!goldP.vertical) { // Enter portal is not vertical and Exit portal is not Vertical
                    if (goldP.direction == 'bottom') {// Portal is below platform 
                        player.x = goldP.x;
                        player.y = goldP.y + 10 + goldP.h;
                    }
                    else {// Portal above platform
                        player.x = goldP.x;
                        player.y = goldP.y - 10;
                    }
                }
            }
        }
        if (isCollidingPlayer(player, playerHitBox, goldP)) {
            if (goldP.vertical) {
                if (purpleP.vertical) { //Enter Portal is Vertical and Exit Portal is Vertical
                    if (purpleP.direction == 'left') { //Portal on left side of platform
                        player.x = purpleP.x - 10
                        player.y = purpleP.y + (purpleP.h / 2);
                    }
                    else { // Portal on right side of platform
                        player.x = purpleP.x + (purpleP.w + 10);
                        player.y = purpleP.y + (purpleP.h / 2);
                    }
                }
                else if (!purpleP.vertical) { // Enter portal is Vertical and Exit Portal is not
                    if (purpleP.direction == 'bottom') { // Portal is below platform 
                        player.x = purpleP.x;
                        player.y = purpleP.y + (10 + purpleP.h);
                    }
                    else { // Portal above platform
                        player.x = purpleP.x;
                        player.y = purpleP.y - 10;
                    }
                }
            }
            else if (!goldP.vertical) {
                if (purpleP.vertical) { // Enter portal is not vertical and Exit portal is vertical 
                    if (purpleP.direction == 'left') {//Portal on left side of platform
                        player.x = purpleP.x - 10
                        player.y = purpleP.y + (purpleP.h / 2);
                    }
                    else {// Portal on right side of platform
                        player.x = purpleP.x + (purpleP.w + 10);
                        player.y = purpleP.y + (purpleP.h / 2);
                    }
                }
                else if (!purpleP.vertical) { // Enter portal is not vertical and Exit portal is not Vertical
                    if (purpleP.direction == 'bottom') {// Portal is below platform 
                        player.x = purpleP.x;
                        player.y = purpleP.y + (10 + purpleP.h);
                    }
                    else {// Portal above platform
                        player.x = purpleP.x;
                        player.y = purpleP.y - 10;
                    }
                }
            }
        }
    }
}
