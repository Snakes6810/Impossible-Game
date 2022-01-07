// Create level components
// between 1 and 28 on X axis.  between 1 and 18 on Y axis
function level2() {
	newCharacter(2, 10, "red");
	newGoal(26, 7, 3, 7);

	// create walls (X/Y location, X/Y Start, Length)
	outerWalls();
	for (b = 1; b < 7; b++) {newWallRow(b, 1, 28);};
	for (b = 14; b < 19; b++) {newWallRow(b, 1, 28);};

	// create enemies as per level (x location, Y location, X speed, Y speed)
	newBounceEnemy(5, 10, 0, 1);
	newBounceEnemy(7, 10, 0, -1);
	newBounceEnemy(9, 10, 0, 1);
	newBounceEnemy(11, 10, 0, -1);
	newBounceEnemy(13, 10, 0, 1);
	newBounceEnemy(15, 10, 0, -1);
	newBounceEnemy(17, 10, 0, 1);
	newBounceEnemy(19, 10, 0, -1);
	newBounceEnemy(21, 10, 0, 1);
	newBounceEnemy(23, 10, 0, -1);
	//for (b = 1; b < 14; b++) {newBounceEnemy(3, 10, 1, 0);};
}