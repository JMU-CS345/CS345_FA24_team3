function isCollidingPlayer(player, playerHitBox, platform) {
    // Check if player is above platform
    if (player.y + player.h < platform.y) return false;
    // Check if player is below platform
    if (playerHitBox.y > platform.y + platform.h) return false;
    // Check if player is to the left of platform
    if (playerHitBox.x + playerHitBox.w < platform.x) return false;
    // Check if player is to the right of platform
    if (playerHitBox.x > platform.x + platform.w - 2) return false;
    // If none of the above conditions are true, there is a collision
    return true;
}
function isCollidingObject(player, platform) {
    // Check if player is above platform
    if (player.y + player.h < platform.y) return false;
    // Check if player is below platform
    if (player.y > platform.y + platform.h) return false;
    // Check if player is to the left of platform
    if (player.x + player.w < platform.x) return false;
    // Check if player is to the right of platform
    if (player.x > platform.x + platform.w) return false;
    // If none of the above conditions are true, there is a collision
    return true;
}

function isCollidingEnemy(enemy, platform) {
    if (enemy.y + enemy.h < platform.y) return false;
    if (enemy.y > platform.y + platform.h) return false;
    if (enemy.x + enemy.w < platform.x) return false;
    if (enemy.x > platform.x + platform.w) return false;
    return true;
}


function collisionDirectionPlayer(player, playerHitBox, platform) {
    // Colliding with the top, bottom, right, and left of the platform, respectively
    let topCollision = (player.y + player.h) - platform.y;
    let bottomCollision = (platform.y + platform.h) - playerHitBox.y;
    let leftCollision = (playerHitBox.x + playerHitBox.w) - platform.x;
    let rightCollision = (platform.x + platform.w) - playerHitBox.x;

    // Find the smallest collision distance (indicating the direction of collision)
    if (topCollision < bottomCollision && topCollision < leftCollision && topCollision < rightCollision) {
        return 'top';  // Colliding with the top of the platform
    } else if (bottomCollision < topCollision && bottomCollision < leftCollision && bottomCollision < rightCollision) {
        return 'bottom';  // Colliding with the bottom of the platform
    } else if (rightCollision < leftCollision && rightCollision < bottomCollision && rightCollision < topCollision) {
        return 'right';  // Colliding with the right side of the platform
    } else {
        return 'left';  // Colliding with the left side of the platform
    }
}
function collisionDirectionObject(player, platform) {
    // Colliding with the top, bottom, right, and left of the platform, respectively
    let topCollision = (player.y + player.h) - platform.y;
    let bottomCollision = (platform.y + platform.h) - player.y;
    let leftCollision = (player.x + player.w) - platform.x;
    let rightCollision = (platform.x + platform.w) - player.x;

    // Find the smallest collision distance (indicating the direction of collision)
    if (topCollision < bottomCollision && topCollision < leftCollision && topCollision < rightCollision) {
        return 'top';  // Colliding with the top of the platform
    } else if (bottomCollision < topCollision && bottomCollision < leftCollision && bottomCollision < rightCollision) {
        return 'bottom';  // Colliding with the bottom of the platform
    } else if (rightCollision < leftCollision && rightCollision < bottomCollision && rightCollision < topCollision) {
        return 'right';  // Colliding with the right side of the platform
    } else {
        return 'left';  // Colliding with the left side of the platform
    }
}