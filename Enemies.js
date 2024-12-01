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

let drawHelper;

class Boss extends Enemy {

    static asset = null;
    static assetR = null;

    static FRAME_WIDTH = 48;
    static FRAME_HEIGHT = 48;

    static shootingIntervals = 5000;
    static chargeInterval = 2000;
    static fireIntervals = 1000;

    static maxHealth = 3;

    constructor(x, y, w, h) {
        
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

        this.projTimer = 0;
        this.projectile = null; // place holder for laser or fist. Only one will be on map at same time.
        this.isCharging = false;
        this.chargeTimer = 0;
        this.changeSwitchDir = true;
        this.fireTimer = 0;
        this.isFiring = false;
        this.random = Math.random(); //Chooses which type of projectile to make. More likely to choose lazer over Fist

        this.currentHealth = Boss.maxHealth;

    }
    attack(player) {
        spawnPlayer();
        player.v = 0;
    }

    shootAtPlayer(player) {
        if (this.canShoot) {
            console.log("shot at palyer");
            this.canShoot = false;

            const projX = this.x + this.w / 2;
            const projY = this.y + this.h / 2;

            const targetX = player.x + player.w / 2;
            const targetY = player.y + player.h / 2;

            
            if (this.random < 0.1) {
                this.projectile = new Laserbeam(projX, projY, targetX, targetY);
                console.log("created  laser");
            } else {
                this.projectile = new Fist(projX, projY, targetX, targetY);
            }

            this.random = Math.random()// so i can have access to it when drawing. 
        }
    }

    assignMovementDirection(player) {
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
            this.projectile.x + this.projectile.w > playerHitBox.x &&
            this.projectile.y < playerHitBox.y + playerHitBox.h &&
            this.projectile.y + this.projectile.h > playerHitBox.y
        ) {
            this.projectiles = null;
            return true;
        }
        return false;
    }

    draw() {
        const sx = this.currentFrame * Boss.FRAME_WIDTH;

        if (this.isCharging && this.projectile instanceof Laserbeam) {
            if (this.direction == 1) {
                image(Laserbeam.assetLaser, this.x + 100, this.y - 25, 400, 400, 0, 800, 100, 100);
                image(Boss.asset, this.x, this.y, this.w, this.h, 300, 200, 100, 100);
                drawHelper = true;
            } else {
                image(Laserbeam.assetLaser, this.x - 250, this.y - 25, 400, 400, 0, 800, 100, 100);
                image(Boss.assetR, this.x, this.y, this.w, this.h, 600, 200, 100, 100);
                drawHelper = false;
            }
        } else if (this.isCharging) {
            if (this.direction == 1) {
                image(Boss.asset, this.x, this.y, this.w, this.h, 300, 200, 100, 100);
                drawHelper = true;
            } else {
                image(Boss.assetR, this.x, this.y, this.w, this.h, 600, 200, 100, 100);
                drawHelper = false;
            }
        } else {
            image(Boss.asset, this.x, this.y, this.w, this.h, sx, 0, 100, 100);
        }
    }

    drawBossHealthBar(currentHealth) {
        const barWidth = windowWidth / 3;
        const barHeight = 20;
        const x = (windowWidth - barWidth) / 2;
        const y = 50;
    
        const healthRatio = currentHealth / Boss.maxHealth;
        const healthWidth = barWidth * healthRatio;
    
        fill(100,0,0);
        rect(x, y, barWidth, barHeight);
    
        fill(255, 0, 0);
        rect(x, y, healthWidth, barHeight);
    
        noFill();
        stroke(0);
        rect(x, y, barWidth, barHeight);
    }

    move() {

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

        // moving around waiting to charge
        if (!this.isCharging && !this.isFiring) {
            this.projTimer += deltaTime;
            this.changeSwitchDir = true;
        // charging up shot
        } else if (this.isCharging) {
            this.chargeTimer += deltaTime;
            this.changeSwitchDir = false;
            
            this.speedX = 0;
            this.speedY = 0;
        // firing
        } else if(this.isFiring) {
            this.fireTimer += deltaTime;
            this.changeSwitchDir = false;
        }

        if (this.projTimer >= Boss.shootingIntervals) {
            this.projTimer = 0;
            this.isCharging = true;
        }


        if (this.chargeTimer >= Boss.chargeInterval) {
            this.isCharging = false;

            this.canShoot = true;

            this.isFiring = true;

            this.chargeTimer = 0;
        }

        if (this.fireTimer >= Boss.fireIntervals) {
            this.isFiring = false;

            this.speedX = 2;
            this.speedY = 1.5;

            this.fireTimer = 0;
        }

        if (this.projectile) {
            this.projectile.draw();
            this.projectile.move();

            // Check if the projectile is out of bounds or has hit something
            if (!this.projectile.active ||
                this.projectile.x < 0 || this.projectile.x > windowWidth ||
                this.projectile.y < 0 || this.projectile.y > windowHeight) {
                this.projectile = null;
            }
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

        this.w = 400;
        this.h = 400;

        this.speed = 10;

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
        if (drawHelper) {
            image(Laserbeam.assetLaser, this.x + 100, this.y - 25, this.w, this.h, 0, 800, 100, 100);
        } else {
            image(Laserbeam.assetLaser, this.x - 250, this.y - 25, this.w, this.h, 0, 800, 100, 100);
        }
    }
}

class Fist {
    static assetFist = null;
    static assetFistR = null;

    constructor(x, y, targetX, targetY) {
        this.x = x;
        this.y = y;

        this.w = 200;
        this.h = 200;

        this.speed = 6;

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
        if (drawHelper) {
            image(Fist.assetFistR, this.x + 100, this.y - 25, this.w, this.h, 0, 0);
        } else {
            image(Fist.assetFist, this.x - 250, this.y - 25, this.w, this.h, 0,0);
        }
    }
}
