// Create level components
function level11() {
	newCharacter(2, 5, "red");
	newGoal(26, 10, 3, 9);

	// barrier & keys
	newBarrierRow(9, 1, 4);
	newKey(27, 5);

	// walls (X/Y location, X/Y Start, Length)
	outerWalls();
	//for (b = 1; b < 6; b++) {newWallRow(b, 1, 28);};
	newWallRow(9, 5, 28);


	// enemies

	// flames 
	newFlamesDownEnemy(5, 10, 20, 180);
	newFlamesUpEnemy(6, 1, 20, 160);
	newFlamesDownEnemy(8, 10, 20, 180);
	newFlamesUpEnemy(9, 1, 20, 160);
	newFlamesDownEnemy(11, 10, 20, 180);
	newFlamesUpEnemy(12, 1, 20, 160);
	newFlamesDownEnemy(14, 10, 20, 180);
	newFlamesUpEnemy(15, 1, 20, 160);
	newFlamesDownEnemy(17, 10, 20, 180);
	newFlamesUpEnemy(18, 1, 20, 160);
	newFlamesDownEnemy(20, 10, 20, 180);
	newFlamesUpEnemy(21, 1, 20, 160);
	newFlamesDownEnemy(23, 10, 20, 180);
	newFlamesUpEnemy(24, 1, 20, 160);


	// top row
	newBounceEnemy(8, 7, 0, 1);
	newBounceEnemy(12, 7, 0, -1);
	newBounceEnemy(16, 7, 0, 1);
	newBounceEnemy(20, 7, 0, -1);

	newBounceEnemy(8, 12, 0, 1);
	newBounceEnemy(12, 12, 0, -1);
	newBounceEnemy(16, 12, 0, 1);
	newBounceEnemy(20, 12, 0, -1);

	newBounceEnemy(8, 17, 0, 1);	
	newBounceEnemy(12, 17, 0, -1);	
	newBounceEnemy(16, 17, 0, 1);	
	newBounceEnemy(20, 17, 0, -1);


	//for (i = -40; i <= 40; i += 20) {newMineEnemy(8, 9, 10, "mine", i, 1, 1);}
	//for (i = -40; i <= 40; i += 20) {newMineEnemy(15, 9, 10, "mine", i, 1.4, 1);}
	//for (i = -40; i <= 40; i += 20) {newMineEnemy(22, 9, 10, "mine", i, 1.3, 1);}

	//for (i = -40; i <= 40; i += 20) {newMineEnemy(19, 9, 10, "mine", i, 1);}
	//for (i = -120; i <= 120; i += 20) {newMineEnemy(14, 9, 10, "mine", i, -2);}
}