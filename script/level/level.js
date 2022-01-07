var currentLevel = 0; // current game level
var goal;

// make goal
function newGoal(x, y, width, height) {
	goal = new rectangle(width * position, height * position, "green", x * position, y * position);
}

// Create level components, then start interval timer
function startNextLevel(level) {
	flamesSound.stop();
	// reset game area
	gameArea.stop();
	
	// increase level by one. Or set level manually.
	if (level == null) {currentLevel += 1;}
	else {currentLevel = level;};
	// print current level in html
	if (currentLevel == 0) {
		$('#level').html("Level Select");
	} else {
		$('#level').html("Current level: &nbsp;&nbsp;&nbsp;".concat(currentLevel.toString()));
	}
	
	// retrieve best times
	retrieveBestTimes();
	
	// turn array into string so it can be stored in local storage
	localStorage.setItem('bestTimesImpossibleGame', JSON.stringify(bestTimes));
	// print new best time to html doc
	$('#best-time').html(JSON.stringify(bestTimes[level]));

	// if on level select, change best time html to total time
	if (currentLevel == 0) {
		$('#best-time').html("Total Time: &nbsp;&nbsp;&nbsp;".concat(bestTimes[0]));
	// else print current best time to html doc
	} else {
		if (bestTimes[currentLevel] == null) {
			$('#best-time').html("Best Time: &nbsp;&nbsp;&nbsp;none");
		} else {
			$('#best-time').html("Best Time: &nbsp;&nbsp;&nbsp;".concat(bestTimes[currentLevel]));
		}
	}

	// initializes components of each level
	createLevel(currentLevel);
	// start interval timer
	gameArea.start();
	// restart level timer
	if (!timer.isRunning && level > 0) {
		timer.start();
	}
	timer.reset();
}

// load defined level
function loadLevel(level) {
	// check for previous level having been completed
	if (bestTimes[level - 1] != null) {
		startNextLevel(level);
	}
}

// complete level function
function completeLevel() {
	winSound.play();
	// stop interval timer (redraw)
	gameArea.stop();
	// update times & open dialog
	updateBestTime(currentLevel);
}

// each levels components are created here (only called once per level)
function createLevel(level) {
	// clear current arrays
	levelSelector = [];
	character = null;
	goal = null;
	walls = [];
	barrier = [];
	key = [];
	bombEnemy = [];
	bounceEnemy = [];
	mineEnemy = [];
	flamesUpEnemy = [];
	flamesDownEnemy = [];
	flamethrowerDown = [];
	flamethrowerUp = [];
	flamesPos = 30;
	// create new components
	if (level == 0) {createLevelSelect();}
	else if (level == 1) {level1();}
	else if (level == 2) {level2();}
	else if (level == 3) {level3();}
	else if (level == 4) {level4();}
	else if (level == 5) {level5();}
	else if (level == 6) {level6();}
	else if (level == 7) {level7();}
	else if (level == 8) {level8();}
	else if (level == 9) {level9();}
	else if (level == 10) {level10();}
	else if (level == 11) {level11();}
	else if (level == 12) {level12();}
	else if (level == 13) {level13();}
	else if (level == 14) {level14();}
	else if (level == 15) {level15();}
	/*else if (level == 16) {}
	else if (level == 17) {level17();}
	else if (level == 18) {level18();}
	else if (level == 19) {level19();}
	else if (level == 20) {level20();}
	else if (level == 21) {level21();}
	else if (level == 22) {level22();}
	else if (level == 23) {level23();}
	else if (level == 24) {level24();}
	else if (level == 25) {level25();}
	else if (level == 26) {level26();}
	else if (level == 27) {level27();}
	else if (level == 28) {level28();}
	else if (level == 29) {level29();}
	else if (level == 30) {level30();}*/
	else {
		//backup position
		newCharacter(2, 10, "red");
		newGoal(4, 10, 1, 1);
	}
}