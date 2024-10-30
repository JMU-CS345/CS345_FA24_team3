class Enemy {
    constructor(x, y, w, h, dead) {
        if (new.target == Enemy)
            throw new Error("Specify what enemy instance is being constructed")

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dead = dead;
    }

    move() {
        throw new Error("Specify what enemy instance must move().");
    }

    attack() {
        throw new Error("Specify what enemy instance must attack().");
    }

    killed() {
        throw new Error("Specify what enemy instance must killed().");
    }

    playerDetected() {
        throw new Error("Specify what enemy instance must playerDetected().");
    }

    hitbox() {
        throw new Error("Specify what enemy instance must hitBox().");
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

    // todo rest of methods.

    updateAlien() {
        this.updateAnimation();
        this.draw();
        this.move();
    }
}