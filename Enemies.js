class Enemy {
    constructor(x, y, w, h) {
        if (new.target == Enemy)
            throw new Error("Specify what enemy instance is being constructed")

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.v = 0;
        this.a = 1;

        this.deadTimer = null;
        this.dead = false;

        this.hitboxOffsetX = 30;
        this.hitboxOffsetY = 0;
        this.hitboxWidth = 30;
        this.hitboxHeight = 0;
        this.canTeleport = true;
        this.teleportationTimer = 0;
    }

    attack(player) {
        spawnPlayer();
        player.v = 0;
    }

    playerDetected(pX, pY, minD) {

        // not changing direction here, just detecting

        if (dist(pX, pY, this.x, this.y) <= minD) {
            if (pX < this.x) {
                return "Left";      // player left of enemy
            } else {
                return "Right";     // player right of enemy
            }
        }
        return false;               // player not detected
    }

    // Calculate and return the hitbox
    getHitbox() {
        return {
            x: this.x + this.hitboxOffsetX,
            y: this.y + this.hitboxOffsetY,
            width: this.hitboxWidth,
            height: this.hitboxHeight,
        };
    }
}

// =====================================================================

class Alien extends Enemy {
    static asset = null;

    static FRAME_WIDTH = 48;
    static FRAME_HEIGHT = 48;

    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.speed = 2;
        this.direction = Math.random() < 0.5 ? -1 : 1;

        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 10;
    }

    updateAnimation() {
        this.frameCounter++;

        if (this.currentFrame == 0 && this.frameCounter < 90) {
            this.speed = 0;
        } else if (this.currentFrame == 0 && this.frameCounter >= 90) {
            this.speed = 2;
            if (this.direction == 1) {
                this.currentFrame = 5;
            } else if (this.direction == -1) {
                this.currentFrame = 6;
            }
        } else if (this.frameCounter >= this.frameDelay) {
            if (this.direction == 1) {
                if (this.currentFrame == 5) {
                    this.currentFrame = 6;
                } else {
                    this.currentFrame = 5;
                }
            } else if (this.direction == -1) {
                if (this.currentFrame == 7) {
                    this.currentFrame = 8;
                } else {
                    this.currentFrame = 7;
                }
            }
            this.frameCounter = 0;
        }
    }

    draw() {
        const sx = this.currentFrame * Alien.FRAME_WIDTH;
        image(Alien.asset, this.x, this.y, this.w, this.h, sx, 0, Alien.FRAME_WIDTH, Alien.FRAME_HEIGHT);
    }

    move() {
        this.x += this.direction * this.speed;
        if (this.x >= windowWidth - 120 || this.x <= -120)
            this.direction *= -1;
    }

    killed() {
        image(Alien.asset, this.x, this.y, this.w, this.h, Alien.FRAME_WIDTH * 14, 0, Alien.FRAME_WIDTH, Alien.FRAME_HEIGHT);
    }

    update() {
        this.updateAnimation();
        this.draw();
        this.move();
    }
}

// =====================================================================

class EnragedAlien extends Enemy {
    static asset = null;

    static FRAME_WIDTH = 48;
    static FRAME_HEIGHT = 48;

    static detectionRange = 1000;

    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.speed = 2;
        this.direction = Math.random() < 0.5 ? -1 : 1;

        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 10;

        this.updateTimer = 0;

    }

    updateAnimation() {
        this.frameCounter++;

        if (this.currentFrame == 0 && this.frameCounter < 90) {
            this.speed = 0;
        } else if (this.currentFrame == 0 && this.frameCounter >= 90) {
            this.speed = 2;
            if (this.direction == 1) {
                this.currentFrame = 5;
            } else if (this.direction == -1) {
                this.currentFrame = 6;
            }
        } else if (this.frameCounter >= this.frameDelay) {
            if (this.direction == 1) {
                if (this.currentFrame == 5) {
                    this.currentFrame = 6;
                } else {
                    this.currentFrame = 5;
                }
            } else if (this.direction == -1) {
                if (this.currentFrame == 7) {
                    this.currentFrame = 8;
                } else {
                    this.currentFrame = 7;
                }
            }
            this.frameCounter = 0;
        }
    }

    draw() {
        const sx = this.currentFrame * EnragedAlien.FRAME_WIDTH;
        image(EnragedAlien.asset, this.x, this.y, this.w, this.h, sx, 0, EnragedAlien.FRAME_WIDTH, EnragedAlien.FRAME_HEIGHT);
    }

    move() {
        this.x += this.direction * this.speed;
        if (this.x >= windowWidth - 120 || this.x <= -120)
            this.direction *= -1;
    }

    killed() {
        image(EnragedAlien.asset, this.x, this.y, this.w, this.h, EnragedAlien.FRAME_WIDTH * 14, 0, EnragedAlien.FRAME_WIDTH, EnragedAlien.FRAME_HEIGHT);
    }

    update() {
        this.updateAnimation();
        this.draw();
        this.move();
    }
}

// =====================================================================

class Robot extends Enemy {
    static assetWalk = null;

    static FRAME_WIDTH = 48;
    static FRAME_HEIGHT = 48;

    static shootIntervals = 2000;
    static shootingRange = 1000;

    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.speed = 1.25;
        this.direction = Math.random() < 0.5 ? -1 : 1;

        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 14;

        this.updateTimer = 0;

        this.shotTimer = 0;
        this.canShoot = false;
        this.multiShotPrevention = false;

        this.projectiles = [];
    }

    updateAnimation() {
        this.frameCounter++;

        if (this.frameCounter >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % 6;
            this.frameCounter = 0;
        }
    }

    draw() {
        push();

        if (this.direction == -1) {
            translate(this.x + this.w, this.y);
            scale(-1, 1);
        } else {
            translate(this.x, this.y);
        }

        var sx = this.currentFrame * Robot.FRAME_WIDTH;
        image(Robot.assetWalk, 0, 0, this.w, this.h, sx, 0, Robot.FRAME_WIDTH, Robot.FRAME_HEIGHT);

        pop();

        for (let i = 0; i < this.projectiles.length; i++) {
            this.projectiles[i].draw();
        }
    }

    move() {
        this.x += this.direction * this.speed;
        if (this.x >= windowWidth - 120 || this.x <= -120)
            this.direction *= -1;
    }

    killed() {
        image(deadRobot, this.x, this.y + this.h / 3, this.w, this.h, 0, 0, Robot.FRAME_HEIGHT, Robot.FRAME_WIDTH);
    }

    shootAtPlayer(player) {
        if (this.multiShotPrevention == false) {
            gunSound.play();
            const laserX = this.x + this.w / 2;
            const laserY = this.y + this.h / 2;

            const targetX = player.x + player.w / 2;
            const targetY = player.y + player.h / 2;

            const laser = new Laser(laserX, laserY, targetX, targetY);
            this.projectiles.push(laser);
        }

        this.multiShotPrevention = true;
    }

    updateProjectiles(player) {
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const laser = this.projectiles[i];
            laser.move();
            laser.draw();

            for (let j = 0; j < platforms.length; j++) {
                if (
                    laser.x < platforms[j].x + platforms[j].w &&
                    laser.x + laser.w > platforms[j].x &&
                    laser.y < platforms[j].y + platforms[j].h &&
                    laser.y + laser.h > platforms[j].y
                ) {
                    this.projectiles.splice(i, 1);
                    break;
                }
            }

            if (!laser.active || laser.x < 0 || laser.x > width || laser.y < 0 || laser.y > height) {
                this.projectiles.splice(i, 1);
            }
        }
    }

    checkLaserHitsPlayer(player) {
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const laser = this.projectiles[i];

            if (
                laser.x < playerHitBox.x + playerHitBox.w &&
                laser.x + laser.w > playerHitBox.x &&
                laser.y < playerHitBox.y + playerHitBox.h &&
                laser.y + laser.h > playerHitBox.y
            ) {
                this.projectiles.splice(i, 1);
                return true;
            }
        }
        return false;
    }


    update() {
        this.updateAnimation();
        this.draw();
        this.move();

        this.shotTimer += deltaTime;
        if (this.shotTimer >= Robot.shootIntervals) {
            this.canShoot = true;
            this.shotTimer = 0;
            this.multiShotPrevention = false;
        }

        this.updateProjectiles();
    }

}

class Laser {
    static assetLaser = null;

    constructor(x, y, targetX, targetY) {
        this.x = x;
        this.y = y;

        this.w = windowWidth / 100;
        this.h = windowHeight / 100;

        this.speed = 4.5;

        const dx = targetX - x;
        const dy = targetY - y;
        const magnitude = Math.sqrt(dx * dx + dy * dy);

        this.vx = (dx / magnitude) * this.speed;
        this.vy = (dy / magnitude) * this.speed;

        this.active = true;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        image(Laser.assetLaser, this.x, this.y, this.w, this.h, 50, 50, 25, 25);
    }
}

// =====================================================================

class Boss extends Enemy {

    static asset = null;
    static assetR = null;

    static FRAME_WIDTH = 48;
    static FRAME_HEIGHT = 48;

    static shootingIntervals = 6000;
    static chargeInterval = 2000;

    constructor(x, y, w, h) {
        if (new.target == Enemy)
            throw new Error("Specify what enemy instance is being constructed")
        super(x, y, w, h);

        this.direction = 1;
        this.directionY = 0;

        this.speedX = 2;
        this.speedY = 1.5;

        this.hitboxOffsetX = 0;
        this.hitboxOffsetY = 0;
        this.hitboxWidth = 30;
        this.hitboxHeight = 0;

        this.v = 0;
        this.a = 1;

        this.canShoot = false;
        this.detectionRange = windowWidth;

        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 10;

        this.projTimer = 0;
        this.projectile = null; // place holder for laser or first. Only one will be on map at same time.
        this.isCharging = false;
        this.chargeTimer = 0;
        this.changeSwitchDir = true;

    }
    attack(player) {
        spawnPlayer();
        player.v = 0;
    }

    shootAtPlayer(player) {
        if (this.canShoot) {
            this.canShoot = false;
            this.isCharging = true;

            const laserX = this.x + this.w / 2;
            const laserY = this.y + this.h / 2;

            const targetX = player.x + player.w / 2;
            const targetY = player.y + player.h / 2;

            this.projectile = new Laserbeam(laserX, laserY, targetX, targetY);
        }
    }

    assignMovementDirection(player) {
        if (!this.changeSwitchDir) {
            return;
        }

        if (player.x > this.x) {
            this.direction = 1; // Move right
        } else if (player.x < this.x) {
            this.direction = -1; // Move left
        }

        if (player.y > this.y) {
            this.directionY = 1; // Move down
        } else if (player.y < this.y) {
            this.directionY = -1; // Move up
        }
    }

    checkProjHitsPlayer(player) {
        if (this.projectile == null) {
            return;
        }
        
        if (
            this.projectile.x < playerHitBox.x + playerHitBox.w &&
            this.projectile.x + this.projectile.x.w > playerHitBox.x &&
            this.projectile.y < playerHitBox.y + playerHitBox.h &&
                this.projectile.x.y + this.projectile.x.h > playerHitBox.y
        ) {
            this.projectiles = null;
            return true;
        }
        return false;
    }

    draw() {
        const sx = this.currentFrame * Boss.FRAME_WIDTH;

        if (this.isCharging) {
            if (this.direction == 1) {
                image(Boss.asset, this.x, this.y, this.w, this.h, 300, 200, 100, 100);
            } else {
                image(Boss.assetR, this.x, this.y, this.w, this.h, 600, 200, 100, 100);
            }
        } else {
            image(Boss.asset, this.x, this.y, this.w, this.h, sx, 0, 100, 100);
        }
    }
    move() {
        if (!this.changeSwitchDir) {
            return;
        }

        this.x += this.speedX * this.direction;
        this.y += this.speedY * this.directionY;

        // Ensure the boss stays within the game window bounds
        if (this.x <= 0 || this.x >= windowWidth - this.w) {
            this.direction *= -1;
        }
        if (this.y <= 0 || this.y >= windowHeight - this.h) {
            this.directionY *= -1;
        }
    }

    killed() {

    }

    update() {

        if (!this.isCharging) {
            this.projTimer += deltaTime;
            this.changeSwitchDir = true;
        } else {
            this.chargeTimer += deltaTime;
            this.changeSwitchDir = false;

            this.speedX = 0;
            this.speedY = 0;
        }

        if (this.chargeTimer >= Boss.chargeInterval) {
            this.isCharging = false;
            this.chargeTimer = 0;

            this.speedX = 2;
            this.speedY = 1.5;
        }

        if (this.projTimer >= Boss.shootingIntervals) {
            this.canShoot = true;
            this.projTimer = 0;
            this.multiShotPrevention = false;
        }


        this.assignMovementDirection(player);
        this.draw();
        this.move();
    }
}

class Laserbeam {
    static assetLaser = null;

    constructor(x, y, targetX, targetY) {
        this.x = x;
        this.y = y;

        this.w = windowWidth / 100;
        this.h = windowHeight / 100;

        this.speed = 4.5;

        const dx = targetX - x;
        const dy = targetY - y;
        const magnitude = Math.sqrt(dx * dx + dy * dy);

        this.vx = (dx / magnitude) * this.speed;
        this.vy = (dy / magnitude) * this.speed;

        this.active = true;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        image(Laser.assetLaser, this.x, this.y, this.w, this.h, 50, 50, 25, 25);
    }
}

class Fist {
    constructor(x, y, targetX, targetY) {

    }
    move() {

    }
    draw() {

    }
}
