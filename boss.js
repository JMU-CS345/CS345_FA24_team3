class Boss {
    constructor(x, y, w, h) {
        if (new.target == Enemy)
            throw new Error("Specify what enemy instance is being constructed")
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.v = 0;
        this.a = 1;

        this.canShoot = false;

    }
    attack(player) {
        spawnPlayer();
        player.v = 0;
    }
    shootAtPlayer(player) {

    }
    updateProjectiles() {

    }
    draw() {

    }
    move() {

    }
    killed() {

    }
    update() {

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