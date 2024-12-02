let drawHelper;

class Boss extends Enemy {

    static asset = null;
    static assetR = null;

    static FRAME_WIDTH = 48;
    static FRAME_HEIGHT = 48;

    static shootingIntervals = 5000;
    static chargeInterval = 2000;
    static fireIntervals = 1000;


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

        this.currentHealth = 3

        this.invulnerabilityTimer = 0;
        this.invulnerabilityDelay = 500;

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


            if (this.random < 0.6) {
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
            this.projectile = null;
            return true;
        }
        return false;
    }

    checkProjHitsItself() {
        if (this.projectile == null) {
            this.invulnerabilityTimer = 0;
            return;
        }

        this.invulnerabilityTimer += deltaTime;

        if (this.invulnerabilityDelay <= this.invulnerabilityTimer) {
            if (this.projectile instanceof Fist) {
                if (
                    this.projectile.x < this.x + this.w &&
                    this.projectile.x + this.projectile.w > this.x &&
                    this.projectile.y < this.y + this.h &&
                    this.projectile.y + this.projectile.h > this.y
                ) {
                    this.projectile = null;
                    return true;
                }
            }
            return false;
        }
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

        const healthRatio = currentHealth / 3;
        const healthWidth = barWidth * healthRatio;

        fill(100, 0, 0);
        rect(x, y, healthWidth, barHeight);

        fill(255, 0, 0);
        rect(x, y, healthWidth, barHeight);

        noFill();
        stroke(0);
        rect(x, y, healthWidth, barHeight);
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
        } else if (this.isFiring) {
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
        if (this.projectile instanceof Laserbeam && (isCollidingObject(this.projectile, purpleP) || isCollidingObject(this.projectile, goldP))) {
            destroyPortal();
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
    static assetFist = null;      // Left-facing
    static assetFistR = null;     // Right-facing
    static assetFistUp = null;    // Up-facing
    static assetFistDown = null;  // Down-facing

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
        this.teleportationTimer = 0;
        this.canTeleport = true;
        // Determine direction and assign the correct asset
        if (Math.abs(dx) > Math.abs(dy)) {
            this.currentAsset = dx > 0 ? Fist.assetFistR : Fist.assetFist; // Horizontal movement
        } else {
            this.currentAsset = dy > 0 ? Fist.assetFistDown : Fist.assetFistUp; // Vertical movement
        }
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        if (drawHelper) { // Boss facing left
            image(Fist.assetFistR, this.x + 100, this.y - 25, this.w, this.h, 0, 0);
        } else { // Boss facing left
            image(Fist.assetFist, this.x - 250, this.y - 25, this.w, this.h, 0, 0);
        }
    }
}