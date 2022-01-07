// Create level components
function level12() {
	newCharacter(14, 9, "red");
	newGoal(25, 15, 4, 4);

	// barrier & keys
	newBarrierRow(14, 25, 28);
	newBarrierColumn(24, 14, 18);
	newKey(27, 2);
	newKey(2, 17);
	newKey(2, 2);
	newKey(14, 2);
	newKey(14, 17);

	// walls
	outerWalls();
	//for (b = 1; b < 6; b++) {newWallRow(b, 1, 28);};
	//newWallRow(9, 5, 28);



	// enemies

	// flames 
	//newFlamesDownEnemy(23, 10, 20, 180);
	//newFlamesUpEnemy(24, 1, 20, 160);


	// bounce
	newBounceEnemy(4, 9, 0, -1);
	newBounceEnemy(8, 9, 0, 1);
	newBounceEnemy(12, 9, 0, -1);
	newBounceEnemy(16, 9, 0, 1);
	newBounceEnemy(20, 9, 0, -1);
	newBounceEnemy(24, 9, 0, 1);

	for (b = 1; b < 9; b++) {newBounceEnemy(14, b, -1, 0);};
	for (b = 1; b < 9; b++) {newBounceEnemy(14, b, 1, 0);};

	for (b = 11; b < 19; b++) {newBounceEnemy(14, b, -1, 0);};
	for (b = 11; b < 19; b++) {newBounceEnemy(14, b, 1, 0);};
	


	// bomb
	//newBombEnemy(16, 9);

	// mines
	for (i = -40; i <= 40; i += 20) {newMineEnemy(8, 9, 10, "mine", i, 2, 1);}
	//for (i = -40; i <= 40; i += 20) {newMineEnemy(15, 9, 10, "mine", i, 1.4, 1);}
	for (i = -40; i <= 40; i += 20) {newMineEnemy(22, 9, 10, "mine", i, 2, 1);}

	//for (i = -40; i <= 40; i += 20) {newMineEnemy(19, 9, 10, "mine", i, 1);}
	//for (i = -120; i <= 120; i += 20) {newMineEnemy(14, 9, 10, "mine", i, -2);}
}