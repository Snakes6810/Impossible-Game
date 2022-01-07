// Create level components
function level7() {
	newCharacter(3, 5, "red");
	newGoal(1, 10, 2, 9);
	
	// create walls (X/Y location, X/Y Start, Length)
	outerWalls();
	//for (b = 1; b < 14; b++) {newWallRow(b, 6, 23);};
	newWallRow(9, 1, 14);

	newKey(16, 10);
	newKey(27, 3);
	newKey(27, 16);
	newKey(19, 12);

	newBounceEnemy(16, 3, 1, 0);

	newBarrierColumn(3, 10, 18);

	newBounceEnemy(26, 4, 0, 1);

	newBounceEnemy(16, 13, 0, 1);

	newBounceEnemy(16, 9, 1, 0);

	newBounceEnemy(10, 16, 0, 1);
	newBounceEnemy(6, 16, 0, -1);

	newBounceEnemy(16, 13, 1, 0);
	newBounceEnemy(16, 15, -1, 0);

	//for (b = 1; b < 14; b++) {newBounceEnemy(3, 10, 1, 0);};

	for (i = -120; i <= 120; i += 20) {newMineEnemy(19, 9, 10, "mine", i, 1, 1);}
	for (i = -120; i <= 120; i += 20) {newMineEnemy(19, 9, 10, "mine", i, 1,);}
	//for (i = -120; i <= 120; i += 20) {newMineEnemy(14, 9, 10, "mine", i, -2);}
}