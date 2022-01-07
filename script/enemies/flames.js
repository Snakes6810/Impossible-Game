var flamethrowerUp = [];
var flamethrowerDown = [];

var flamesUpEnemy = []; 
var flamesDownEnemy = []; 

// tick through 40 frames, 20 of which have flames in them
var flamesPos = 30;
var flamesTimer = setInterval(function() {
	if (flamesPos < 50) {
		flamesPos ++;
	} else {
		flamesPos = 1;
	}
}, 100)

// add new flames up enemy
function newFlamesUpEnemy(x, y, width, height) {
	flamesUpEnemy.push(new rectangle(width, height, "flames1", x * position, y * position));
	flamethrowerUp.push (new rectangle(spacing, spacing, "flamethrower", x * position, y * position + height))
}

// add new flames down enemy
function newFlamesDownEnemy(x, y, width, height) {
	flamesDownEnemy.push(new rectangle(width, height, "flames1down", x * position, y * position));
	flamethrowerDown.push (new rectangle(spacing, spacing, "flamethrowerdown", x * position, y * position - spacing))
}

// run every game tick
function updateFlamesUp() {
	for (i = 0; i < flamesUpEnemy.length; i ++) {
		var x = flamesUpEnemy[i].x;
		var y = flamesUpEnemy[i].y;
		var width = flamesUpEnemy[i].width;
		var height = flamesUpEnemy[i].height;
		// play sound
		if (flamesPos == 1 && !flamesSound.paused) {
			flamesSound.play();
		}
		if (flamesPos < 21) {
			var imgName = "flames".concat(flamesPos.toString());
			flamesUpEnemy[i] = new rectangle(width, height, imgName, x, y);
		} else {
			flamesUpEnemy[i] = new rectangle(width, height, "char", x, y);
		}
		flamesUpEnemy[i].update();
		flamethrowerUp[i].update();
	}
}

// run every game tick
function updateFlamesDown() {
	for (i = 0; i < flamesDownEnemy.length; i ++) {
		var x = flamesDownEnemy[i].x;
		var y = flamesDownEnemy[i].y;
		var width = flamesDownEnemy[i].width;
		var height = flamesDownEnemy[i].height;
		// play sound
		if (flamesPos == 1 && !flamesSound.paused) {
			flamesSound.play();
		}
		if (flamesPos < 21) {
			var imgName = "flames".concat(flamesPos.toString()).concat("down");
			flamesDownEnemy[i] = new rectangle(width, height, imgName, x, y);
		} else {
			flamesDownEnemy[i] = new rectangle(width, height, "chardown", x, y);
		}
		flamesDownEnemy[i].update();
		flamethrowerDown[i].update();
	}
}

// run when character hits an enemy. Position is the position in enemy array
function hitFlames(position) {
	// play burning sound
	burningSound.play();
	
	var x = character.x;
	var y = character.y;
	characterDead = true;
	// death animation
	var i = 1;
	while (i < 20) {
		(function (i) {
		  	setTimeout(function () {
				character = new rectangle(spacing - i, spacing - i, "black", x + i/2, y + i/2);
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