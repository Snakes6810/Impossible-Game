// Create level components
// between 1 and 28 on X axis.  between 1 and 18 on Y axis
function level1() {
	newCharacter(3, 4, "red");
	newGoal(24, 1, 5, 4);

	// create walls (X/Y location, X/Y Start, Length)
	outerWalls();
	newWallColumn(7, 1, 13);
	newWallColumn(15, 6, 18);
	newWallColumn(23, 1, 13);

	// create enemies as per level (x location, Y location, X speed, Y speed)
	newBounceEnemy(3, 10, 1, 0);
	newBounceEnemy(7, 15, 0, 1);
	newBounceEnemy(15, 2, 0, 1);
	newBounceEnemy(23, 15, 0, 1);
	newBounceEnemy(10, 6, 1, 0);
	newBounceEnemy(14, 13, 1, 0);
	newBounceEnemy(18, 6, 1, 0);
	newBounceEnemy(22, 13, 1, 0);
	newBounceEnemy(25, 10, 1, 0);
	//for (b = 1; b < 14; b++) {newBounceEnemy(3, 10, 1, 0);};
}