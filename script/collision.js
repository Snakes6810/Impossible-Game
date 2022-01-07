// run to check for character collisions
function checkCollisions() {
	// check for collision with enemy types & execute function depening on what is hit
	if (collisionWithRect(bombEnemy) && !characterDead) {
		explodeBomb(i);
	};
	if (collisionWithRect(bounceEnemy) && !characterDead) {
		hitBounce(i);
	};
	if (collisionWithCircle(mineEnemy) && !characterDead) {
		explodeMine(i);
	}
	if (collisionWithRect(flamesUpEnemy) && !characterDead && flamesPos < 19) {
		hitFlames(i);
	}
	if (collisionWithRect(flamesDownEnemy) && !characterDead && flamesPos < 19) {
		hitFlames(i);
	}

	// check collision with keys
	if (collisionWithRect(key) && !characterDead) {collectKey(i);}

	// check collision with goal and complete level
	if (character.crashWith(goal)) {completeLevel();}
}

// check collision with array of rectangle type
function collisionWithRect(type) {
	for (i = 0; i < type.length; i += 1) {
		if (character.crashWith(type[i])) {
			return type[i];
		}
	}	
}

// check collision with array of circle type
function collisionWithCircle(type) {
	for (i = 0; i < type.length; i += 1) {
		if (character.crashCircle(type[i])) {
			return type[i];
		}
	}
}