// Create level components
function level3() {
	newCharacter(2, 10, "red");
	newGoal(27, 1, 2, 18);

	// create walls (X/Y location, X/Y Start, Length)
	outerWalls();

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

	newBounceEnemy(10, 3, 1, 0);
	newBounceEnemy(10, 7, 1, 0);
	newBounceEnemy(10, 12, 1, 0);
	newBounceEnemy(10, 16, 1, 0);
	newBounceEnemy(20, 4, -1, 0);
	newBounceEnemy(20, 8, -1, 0);
	newBounceEnemy(20, 13, -1, 0);
	newBounceEnemy(20, 17, -1, 0);
	//for (b = 1; b < 14; b++) {newBounceEnemy(3, 10, 1, 0);};
}