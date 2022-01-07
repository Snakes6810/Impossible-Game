// Create level components
function level4() {
	newCharacter(3, 4, "red");
	newGoal(24, 1, 5, 4);
	
	// create walls (X/Y location, X/Y Start, Length)
	outerWalls();
	for (b = 1; b < 14; b++) {newWallRow(b, 6, 23);};

	// create enemies as per level (x location, Y location, X speed, Y speed)
	newBombEnemy(3, 9);
	newBombEnemy(3, 12);
	newBombEnemy(3, 16);
	newBounceEnemy(3, 8, 1, 0);
	newBounceEnemy(3, 10, -1, 0);
	newBounceEnemy(3, 13, 1, 0);

	newBounceEnemy(3, 14, -1, 0);
	newBounceEnemy(3, 15, 1, 0);
	newBounceEnemy(3, 17, -1, 0);
	newBounceEnemy(3, 18, 1, 0);
	
	newBombEnemy(11, 16);

	newBounceEnemy(13, 17, 0, 1);
	newBounceEnemy(16, 17, 0, -1);

	newBombEnemy(18, 16);
	
	newBounceEnemy(26, 14, -1, 0);
	newBounceEnemy(26, 15, 1, 0);
	newBounceEnemy(26, 17, -1, 0);
	newBounceEnemy(26, 18, 1, 0);

	newBombEnemy(26, 9);
	newBombEnemy(26, 12);
	newBombEnemy(26, 16);
	newBounceEnemy(26, 8, 1, 0);
	newBounceEnemy(26, 10, -1, 0);
	newBounceEnemy(26, 13, 1, 0);
	//for (b = 1; b < 14; b++) {newBounceEnemy(3, 10, 1, 0);};
}