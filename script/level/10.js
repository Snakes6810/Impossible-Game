// Create level components
function level10() {
	newCharacter(6, 2, "red");
	newGoal(1, 1, 3, 3);

	// barrier & keys
	newBarrierColumn(4, 1, 3);
	newKey(2, 17);

	// walls (X/Y location, X/Y Start, Length)
	outerWalls();
	//for (b = 1; b < 6; b++) {newWallRow(b, 1, 28);};
	newWallRow(4, 1, 24);
	newWallRow(9, 5, 28);
	newWallRow(14, 1, 24);


	// enemies

	newFlamesDownEnemy(8, 1, 20, 60);
	newFlamesUpEnemy(14, 1, 20, 60);
	newFlamesDownEnemy(19, 1, 20, 60);
	newFlamesUpEnemy(24, 1, 20, 60);
	newFlamesDownEnemy(28, 1, 20, 160);

	newFlamesUpEnemy(6, 5, 20, 80);
	newFlamesUpEnemy(14, 5, 20, 80);
	newFlamesUpEnemy(22, 5, 20, 80);
	newFlamesDownEnemy(1, 5, 20, 180);

	newFlamesUpEnemy(3, 10, 20, 80);
	newFlamesDownEnemy(10, 10, 20, 80);
	newFlamesDownEnemy(18, 10, 20, 80);
	newFlamesUpEnemy(24, 10, 20, 80);
	newFlamesDownEnemy(28, 10, 20, 180);

	for (i = 8; i < 21; i ++) {newFlamesUpEnemy(i, 15, 20, 80);}

	newBounceEnemy(8, 7, 0, 1);
	newBounceEnemy(8, 12, 0, 1);
	newBounceEnemy(8, 17, 0, 1);

	newBounceEnemy(12, 7, 0, -1);
	newBounceEnemy(12, 12, 0, -1);
	newBounceEnemy(12, 17, 0, -1);

	newBounceEnemy(16, 7, 0, 1);
	newBounceEnemy(16, 12, 0, 1);
	newBounceEnemy(16, 17, 0, 1);

	newBounceEnemy(20, 7, 0, -1);
	newBounceEnemy(20, 12, 0, -1);
	newBounceEnemy(20, 17, 0, -1);


	//for (i = -40; i <= 40; i += 20) {newMineEnemy(8, 9, 10, "mine", i, 1, 1);}
	//for (i = -40; i <= 40; i += 20) {newMineEnemy(15, 9, 10, "mine", i, 1.4, 1);}
	//for (i = -40; i <= 40; i += 20) {newMineEnemy(22, 9, 10, "mine", i, 1.3, 1);}

	//for (i = -40; i <= 40; i += 20) {newMineEnemy(19, 9, 10, "mine", i, 1);}
	//for (i = -120; i <= 120; i += 20) {newMineEnemy(14, 9, 10, "mine", i, -2);}
}