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
    }

    attack(player) {
        player.x = 10;
        player.y = windowHeight - 100;
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

class Robot extends Enemy {
    static assetShoot = null;
    static assetWalk = null;

    static FRAME_WIDTH = 48;
    static FRAME_HEIGHT = 48;

    static shootIntervals = 5000;
    static shootingRange = 850;

    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.speed = 1.25;
        this.direction = Math.random() < 0.5 ? -1 : 1;

        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 14;

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

        var sx;

        if (this.canShoot && this.currentFrame == 1 && this.playerDetected(player.x, player.y, Robot.shootingRange)) {
            this.canShoot = false;
            sx = this.currentFrame * Robot.FRAME_WIDTH;
            image(Robot.assetShoot, 0, 0, this.w, this.h, sx, 0, Robot.FRAME_WIDTH, Robot.FRAME_HEIGHT);
        } else {
            sx = this.currentFrame * Robot.FRAME_WIDTH;
            image(Robot.assetWalk, 0, 0, this.w, this.h, sx, 0, Robot.FRAME_WIDTH, Robot.FRAME_HEIGHT);
        }
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
        image(Alien.asset, this.x, this.y, this.w, this.h, Alien.FRAME_WIDTH * 14, 0, Alien.FRAME_WIDTH, Alien.FRAME_HEIGHT);
    }

    shootAtPlayer(player) {
        if (this.multiShotPrevention == false) {
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

            if (!laser.active || laser.x < 0 || laser.x > width || laser.y < 0 || laser.y > height) {
                this.projectiles.splice(i, 1);
            }
        }
    }

    checkLaserHitsPlayer(player) {
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const laser = this.projectiles[i];

            if (
                laser.x < player.x + player.w &&
                laser.x + laser.w > player.x &&
                laser.y < player.y + player.h &&
                laser.y + laser.h > player.y
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

        this.w = 50;
        this.h = 50;

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
        image(Laser.assetLaser, this.x, this.y, this.w, this.h);
    }
}

// =====================================================================
