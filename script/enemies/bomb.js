var bombEnemy = []; // array of bomb enemy locations as per level
var bombSize = 18;

// stationary enemy  (x location, Y location)
function newBombEnemy(x, y) {
	bombEnemy.push(new rectangle(bombSize, bombSize, "bomb", x * position + 1, y * position + 1));
}

// update bomb enemies
function updateBomb() {
	for (i = 0; i < bombEnemy.length; i += 1) {		
		bombEnemy[i].update();
	}
}

// run when character hits an enemy. Position is the position in enemy array
function explodeBomb(position) {
	// play explosion
	explosionSound.play();
	//move character off screen to give illusion of death
	character.x = -100;
	character.y = -100; 
	// store positions of x & y coordinates
	var x = bombEnemy[position].x
	var y = bombEnemy[position].y
	var i = 1;
	while (i < 7) {
		(function (i) {
		  	setTimeout(function () {
				var explosion = "explosion".concat(i.toString());
				bombEnemy[position] = new rectangle(bombSize, bombSize, explosion, x, y);
		    }, 50*i);
		})(i);
		i ++;;
	};
	setTimeout(function() {
		// stop sound effects
		explosionSound.stop();
		//bombEnemy[position] = new rectangle(bombSize, bombSize, "bomb", x, y);
		startNextLevel(currentLevel);
	}, 800)
}