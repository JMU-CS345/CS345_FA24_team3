//thinking about replacing this with a subclass in enemies

class Boss {

    static asset = null;

    static FRAME_WIDTH = 100;
    static FRAME_HEIGHT = 100;

    constructor(x, y, w, h) {
        if (new.target == Enemy)
            throw new Error("Specify what enemy instance is being constructed")
        this.x = x;
        this.y = y;
        this.directionX = 0;
        this.directionY = 0;
        this.w = w;
        this.h = h;

        this.hitboxOffsetX = 0;
        this.hitboxOffsetY = 0;
        this.hitboxWidth = 30;
        this.hitboxHeight = 0;

        this.v = 0;
        this.a = 1;

        this.canShoot = false;

        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 10;
    }
    attack(player) {
        spawnPlayer();
        player.v = 0;
    }
    shootAtPlayer(player) {

    }
    assignMovementDirection(player) {
        //timer before boss battle begins so he doesn't immediately chase?
        if (player.x > this.x) {
            this.directionX = 1;
            //update frames
        } else {
            this.directionX = -1;
        }
        if (player.y > this.y) {
            this.directionY = 1;
        } else {
            this.directionY = -1;
        }
    }
    updateProjectiles() {

    }
    draw() {
        const sx = this.currentFrame * Boss.FRAME_WIDTH;
        rect(this.x, this.y, 20, 20);
    }
    move() {
        this.x += this.directionX * 2;
        this.y += this.directionY * 2;
    }
    killed() {

    }
    update() {
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
