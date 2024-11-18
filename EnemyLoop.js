function enemyLoop() {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        enemyTeleport(enemy);
        let detection = false;
        let canUpdateDirection = false;


        // this to next comment is about platforms collision
        enemy.v += enemy.a;
        enemy.y += enemy.v;

        let enemyIsOnPlatform = false;

        for (let j = 0; j < platforms.length; j++) {
            if (isCollidingEnemy(enemy, platforms[j])) {
                let direction = collisionDirectionObject(enemy, platforms[j]);

                if (direction === "top") {
                    enemy.y = platforms[j].y - enemy.h;
                    enemy.v = 0;
                    enemyIsOnPlatform = true;

                    if (enemy.x + enemy.hitboxOffsetX + enemy.hitboxWidth <= platforms[j].x) {
                        enemy.direction = 1;
                    } else if ((enemy.x - enemy.hitboxOffsetX) + (enemy.w - enemy.hitboxWidth) >= platforms[j].x + platforms[j].w) {
                        enemy.direction = -1;
                    }
                } else if (direction === "bottom") {
                    enemy.y = platforms[j].y + platforms[j].h;
                    enemy.v = 0;
                }
                else if (direction === "right") {
                    enemy.direction = 1;
                }
                else if (direction === "left") {
                    enemy.direction = -1;
                }
                //ADD LEFT AND RIGHT
            }

            if (!enemyIsOnPlatform) {
                enemy.v += enemy.a;
            }

            if (enemy.y + enemy.h >= windowHeight) {
                enemy.y = windowHeight - enemy.h;
                enemy.v = 0;
            }
        }

        // player collison for killing enemies
        if (isCollidingPlayerWithEnemy(player, playerHitBox, enemy) && collisionDirectionPlayer(player, playerHitBox, enemy) == 'top' && !isFalling(player)) {
            enemy.dead = true;
            killEnemy.play();
            enemy.deathTime = millis();
        }

        // player collison for getting hurt
        if (isCollidingPlayerWithEnemy(player, playerHitBox, enemy) && collisionDirectionPlayer(player, playerHitBox, enemy) != 'top' && !enemy.dead && canGetHurt) {
            enemy.attack(player);
            player.health--;
            if (player.health <= 0) {
                deadSound.play();
            }
            else {
                hurtSound.play();
            }
            canGetHurt = false;
        }

        if (enemy instanceof Alien) {
            detection = false;
        }

        // robot
        if (enemy instanceof Robot) {
            detection = enemy.playerDetected(player.x, player.y, Robot.shootingRange);
            enemy.shootAtPlayer(player);

            if (enemy.checkLaserHitsPlayer(player) && canGetHurt) {
                enemy.attack(player);
                player.health--;
                hurtSound.play();
                canGetHurt = false;
            }

            if (enemy.updateTimer >= 500 && enemy.currentFrame == 0) {
                canUpdateDirection = true;
            }

            enemy.updateTimer += 16;
        }

        // enraged alien
        else if (enemy instanceof EnragedAlien) {
            if (detection = enemy.playerDetected(player.x, player.y, EnragedAlien.detectionRange)) {
                enemy.speed = 6;
            } else {
                enemy.speed = 2;
            }

            if (enemy.updateTimer >= 500 && (enemy.currentFrame == 5 || enemy.currentFrame == 7)) {
                canUpdateDirection = true;
            }

            enemy.updateTimer += 12

        }

        // for enemies that can detect
        if (detection) {

            if (canUpdateDirection) {
                if (detection === "Left") {
                    enemy.direction = -1;
                } else if (detection === "Right") {
                    enemy.direction = 1;
                }
                enemy.updateTimer = 0;
            }
        }

        // enemy update cycle
        if (enemy.dead) {
            enemy.killed();
            if (millis() - enemy.deathTime >= 1000) {
                enemies[i] = null;
                enemies.splice(i, 1);
            }
        }
        else {
            enemy.update();
        }
    }
}