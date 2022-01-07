var mineEnemy = []; // array of centre enemy locations as per level
// DRAWING A CIRCLE IS EXTREMELY INTENSIVE ON THE BROWSER.
// CANNOT BE PRINTED EVERY FRAME OR BROWSER WILL SLOW TO A CRAWL

// centre of rotating enemy (x position, y position, radius, type, speedX, speedY)
function newMineEnemy(x, y, radius, type, fromCentre, speed, startPos) {
	mineEnemy.push(new circle(x * position, y * position, radius, type, fromCentre, speed, startPos));
}

// update center enemies once per frame
function updateMine() {
	for (i = 0; i < mineEnemy.length; i += 1) {
		mineEnemy[i].update();
	}
}

// run when character hits an enemy. Position is the position in enemy array
function explodeMine(position) {
	// play explosion
	explosionSound.play();
	//move character off screen to give illusion of death
	character.x = -100;
	character.y = -100; 
	// store positions of x & y coordinates
	var x = mineEnemy[position].x
	var y = mineEnemy[position].y
	var i = 1;
	while (i < 7) {
		(function (i) {
		  	setTimeout(function () {
				var explosion = "explosion".concat(i.toString());
				mineEnemy[position] = new rectangle(this.radius * 2, this.radius * 2, explosion, x, y);
		    }, 50*i);
		})(i);
		i ++;;
	};
	setTimeout(function() {
		// stop sound effects
		explosionSound.stop();
		//bombEnemy[position] = new circle(x, y, radius, type, fromCentre, speed);
		startNextLevel(currentLevel);
	}, 800)
}