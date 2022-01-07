// Create level components
function level5() {
	newCharacter(3, 3, "red");
	newGoal(1, 14, 3, 5);
	
	// create walls (X/Y location, X/Y Start, Length)
	outerWalls();
	for (b = 6; b < 14; b++) {newWallRow(b, 1, 23);};

	// create enemies as per level (x location, Y location, X speed, Y speed)
	for (b = 1; b < 29; b++) {newBombEnemy(b, 1);};
	for (b = 1; b < 5; b++) {newBombEnemy(1, b);};
	for (b = 1; b < 25; b++) {newBombEnemy(b, 5);};
	for (b = 6; b < 15; b++) {newBombEnemy(24, b);};
	for (b = 2; b < 19; b++) {newBombEnemy(28, b);};
	for (b = 4; b < 24; b++) {newBombEnemy(b, 14);};
	for (b = 4; b < 28; b++) {newBombEnemy(b, 18);};
	
	//for (b = 1; b < 14; b++) {newBounceEnemy(3, 10, 1, 0);};
	//1 top
	newBounceEnemy(6, 2, 0, 1);
	newBombEnemy(8, 4);
	//2 top
	newBounceEnemy(9, 3, 0, -1);
	newBombEnemy(12, 2);
	//3 top
	newBounceEnemy(14, 4, 0, -1);
	newBombEnemy(16, 4);
	//4 top
	newBounceEnemy(18, 4, 0, -1);
	newBombEnemy(20, 2);
	//5 top
	newBounceEnemy(23, 2, 0, 1);
	newBombEnemy(24, 4);

	//1 side
	//newBounceEnemy(26, 13, 1, 0);
	newBombEnemy(27, 5);
	//2 side
	//newBounceEnemy(26, 12, -1, 0);
	newBombEnemy(25, 8);
	//3 side
	//newBounceEnemy(26, 13, 1, 0);
	newBombEnemy(27, 11);
	//4 side
	//newBounceEnemy(26, 12, -1, 0);
	newBombEnemy(25, 14);

	//1 bottom from left
	newBounceEnemy(6, 14, 0, -1);
	newBombEnemy(8, 17);
	//2 bottom
	newBounceEnemy(9, 17, 0, 1);
	newBombEnemy(12, 15);
	//3 bottom
	newBounceEnemy(13, 17, 0, 1);
	newBombEnemy(16, 17);
	//4 bottom
	newBounceEnemy(19, 14, 0, 1);
	newBombEnemy(20, 15);
	//5 bottom
	newBounceEnemy(23, 15, 0, 1);
	newBombEnemy(24, 17);
}

