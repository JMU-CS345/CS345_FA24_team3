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

    move() {
    }

    attack() {
    }

    killed() {
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

    hitbox() {
        throw new Error("Specify what enemy instance must hitBox().");
    }

    update() {
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

    attack(player) {
        player.x = 10;
        player.y = windowHeight - 100;
        player.v = 0;
    }

    // todo rest of methods.

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

    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.speed = 1.4;
        this.direction = Math.random() < 0.5 ? -1 : 1;

        this.currentFrame = 0;
        this.frameCounter = 0;
        this.frameDelay = 10;
    }

    updateAnimation() {
        this.frameCounter++;

        // Update frame every `frameDelay` cycles
        if (this.frameCounter >= this.frameDelay) {
            // Loop through frames 0 to 5
            this.currentFrame = (this.currentFrame + 1) % 6;

            // Reset frame counter for the next frame
            this.frameCounter = 0;
        }
    }

    draw() {
        const sx = this.currentFrame * Robot.FRAME_WIDTH;

        push(); // Start a new transformation state

        if (this.direction == -1) {
            // Flip horizontally for left direction and adjust x-coordinate
            translate(this.x + this.w, this.y); // Move origin to the right edge of the robot
            scale(-1, 1); // Flip horizontally
        } else {
            // For right direction, keep the original position
            translate(this.x, this.y);
        }

        // Draw the image using the correct sprite frame, at (0, 0) of the transformed origin
        image(Robot.assetWalk, 0, 0, this.w, this.h, sx, 0, Robot.FRAME_WIDTH, Robot.FRAME_HEIGHT);

        pop(); // Restore transformation state
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
