var bounceEnemy = []; // array of bouncing enemy locations as per level
var bounceSize = 18;

// enemy that bounces off walls (x location, Y location, X speed, Y speed)
function newBounceEnemy(x, y, speedX, speedY) {
	bounceEnemy.push(new rectangle(bounceSize, bounceSize, "bounce", x * position + 1, y * position + 1, speedX * speed, speedY * speed));
}

function updateBounce() {
	// update bouncing enemies
	for (i = 0; i < bounceEnemy.length; i += 1) {
		// check for collision with a wall piece
		for (j = 0; j < walls.length; j += 1) {
			if (bounceEnemy[i].crashWith(walls[j])) {
				j = walls.length;
				// reverse direction
				if (bounceEnemy[i].speedX > 0) {bounceEnemy[i].speedX = -1 * speed;}
				else if (bounceEnemy[i].speedX < 0) {bounceEnemy[i].speedX = 1 * speed;}
				if (bounceEnemy[i].speedY > 0) {bounceEnemy[i].speedY = -1 * speed;}
				else if (bounceEnemy[i].speedY < 0) {bounceEnemy[i].speedY = 1 * speed;}
			}
		}		
		bounceEnemy[i].newPos();
		bounceEnemy[i].update();
	}
}

// run when character hits an enemy. Position is the position in enemy array
function hitBounce(position) {
	// play squish
	squishSound.play();
	
	var x = character.x;
	var y = character.y;
	characterDead = true;
	// death animation
	var i = 1;
	while (i < 20) {
		(function (i) {
		  	setTimeout(function () {
				character = new rectangle(spacing - i, spacing - i, "darkred", x + i/2, y + i/2);
		    }, 20*i);
		})(i);
		i += 1;;
	};
	setTimeout(function() {
		// stop sound effects
		squishSound.stop();
		startNextLevel(currentLevel);
		characterDead = false;
	}, 420)
}