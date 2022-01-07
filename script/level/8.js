// Create level components
function level8() {
	newCharacter(2,7, "red");
	newGoal(27, 6, 2, 7);

	// barrier & key
	newBarrierColumn(26, 6, 12);
	newKey(2, 11);

	// walls (X/Y location, X/Y Start, Length)
	outerWalls();
	for (b = 1; b < 6; b++) {newWallRow(b, 1, 28);};
	for (b = 13; b < 19; b++) {newWallRow(b, 1, 28);};
	newWallRow(9, 1, 22);

	// enemies
	newBounceEnemy(16, 6, 1, 0);

	newBounceEnemy(16, 12, 1, 0);


	for (i = -40; i <= 40; i += 20) {newMineEnemy(8, 9, 10, "mine", i, 1, 1);}
	for (i = -40; i <= 40; i += 20) {newMineEnemy(15, 9, 10, "mine", i, 1.4, 1);}
	for (i = -40; i <= 40; i += 20) {newMineEnemy(22, 9, 10, "mine", i, 1.3, 1);}

	//for (i = -40; i <= 40; i += 20) {newMineEnemy(19, 9, 10, "mine", i, 1);}
	//for (i = -120; i <= 120; i += 20) {newMineEnemy(14, 9, 10, "mine", i, -2);}
}