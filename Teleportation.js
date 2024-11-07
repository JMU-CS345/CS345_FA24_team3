function Teleportation() {    //Teleportation
    if (purpleP.x != -1 && goldP.x != -1) {
        if (isCollidingPlayer(player, playerHitBox, purpleP)) {
            if (purpleP.vertical) {
                if (goldP.vertical) { //Enter Portal is Vertical and Exit Portal is Vertical
                    if (goldP.direction == 'left') { //Portal on left side of platform
                        player.x = goldP.x - 5
                        player.y = goldP.y;
                    }
                    else { // Portal on right side of platform
                        player.x = goldP.x + (goldP.w);
                        player.y = goldP.y;
                    }
                }
                else if (!goldP.vertical) { // Enter portal is Vertical and Exit Portal is not
                    if (goldP.direction == 'bottom') { // Portal is below platform 
                        player.x = goldP.x;
                        player.y = goldP.y + (goldP.h);
                    }
                    else { // Portal above platform
                        player.x = goldP.x;
                        player.y = goldP.y - 5;
                    }
                }
            }
            else if (!purpleP.vertical) {
                if (goldP.vertical) { // Enter portal is not vertical and Exit portal is vertical 
                    if (goldP.direction == 'left') {//Portal on left side of platform
                        player.x = goldP.x - 5;
                        player.y = goldP.y;
                    }
                    else {// Portal on right side of platform
                        player.x = goldP.x + (goldP.w);
                        player.y = goldP.y;
                    }
                }
                else if (!goldP.vertical) { // Enter portal is not vertical and Exit portal is not Vertical
                    if (goldP.direction == 'bottom') {// Portal is below platform 
                        player.x = goldP.x;
                        player.y = goldP.y + goldP.h;
                    }
                    else {// Portal above platform
                        player.x = goldP.x;
                        player.y = goldP.y - 5;
                    }
                }
            }
        }
        if (isCollidingPlayer(player, playerHitBox, goldP)) {
            if (goldP.vertical) {
                if (purpleP.vertical) { //Enter Portal is Vertical and Exit Portal is Vertical
                    if (purpleP.direction == 'left') { //Portal on left side of platform
                        player.x = purpleP.x - 5
                        player.y = purpleP.y;
                    }
                    else { // Portal on right side of platform
                        player.x = purpleP.x + (purpleP.w);
                        player.y = purpleP.y;
                    }
                }
                else if (!purpleP.vertical) { // Enter portal is Vertical and Exit Portal is not
                    if (purpleP.direction == 'bottom') { // Portal is below platform 
                        player.x = purpleP.x;
                        player.y = purpleP.y + (purpleP.h);
                    }
                    else { // Portal above platform
                        player.x = purpleP.x;
                        player.y = purpleP.y - 5;
                    }
                }
            }
            else if (!goldP.vertical) {
                if (purpleP.vertical) { // Enter portal is not vertical and Exit portal is vertical 
                    if (purpleP.direction == 'left') {//Portal on left side of platform
                        player.x = purpleP.x - 5
                        player.y = purpleP.y;
                    }
                    else {// Portal on right side of platform
                        player.x = purpleP.x + (purpleP.w);
                        player.y = purpleP.y;
                    }
                }
                else if (!purpleP.vertical) { // Enter portal is not vertical and Exit portal is not Vertical
                    if (purpleP.direction == 'bottom') {// Portal is below platform 
                        player.x = purpleP.x;
                        player.y = purpleP.y + (purpleP.h);
                    }
                    else {// Portal above platform
                        player.x = purpleP.x;
                        player.y = purpleP.y - 5;
                    }
                }
            }
        }
    }
}
