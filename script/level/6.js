// Create level components
function level6() {
	newCharacter(2, 3, "red");
	newGoal(1, 14, 3, 5);
	
	// create walls (X/Y location, X/Y Start, Length)
	outerWalls();
	for (b = 6; b < 14; b++) {newWallRow(b, 1, 25);};

	// create enemies as per level (x location, Y location, X speed, Y speed)
	//newBombEnemy(3, 9);

	//(center x, center y, radius, type, distance from center, rotation speed)
	for (i = -30; i <= 30; i += 15) {newMineEnemy(6, 3, 10, "mine", i, 3);}

	for (i = -30; i <= 30; i += 15) {newMineEnemy(12, 3, 10, "mine", i, -3);}

	for (i = -30; i <= 30; i += 15) {newMineEnemy(18, 3, 10, "mine", i, 3);}

	for (i = -30; i <= 30; i += 15) {newMineEnemy(24, 3, 10, "mine", i, -3);}


	for (i = -30; i <= 30; i += 15) {newMineEnemy(10, 16, 10, "mine", i, -3);}

	for (i = -30; i <= 30; i += 15) {newMineEnemy(19, 16, 10, "mine", i, -3);}

	newBounceEnemy(14, 15, -1, 0);

	newBounceEnemy(14, 17, 1, 0);

	newBounceEnemy(14, 17, 0, 1);
	
}