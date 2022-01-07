// Create level components
function level14() {
	newCharacter(2, 11, "red");
	newGoal(1, 15, 4, 4);

	// barrier & keys
	//newBarrierRow(14, 25, 28);
	newBarrierColumn(5, 15, 18);
	newKey(27, 2);
	newKey(23, 10);
	newKey(16, 13);


	// walls
	outerWalls();
	//for (b = 1; b < 6; b++) {newWallRow(b, 1, 28);};
	//newWallRow(9, 5, 28);



	// enemies

	// flames 
	//newFlamesDownEnemy(23, 10, 20, 180);
	//newFlamesUpEnemy(24, 1, 20, 160);


	// bounce horizontal
	newBounceEnemy(12, 3, 1, 0);
	newBounceEnemy(12, 3, -1, 0);

	newBounceEnemy(12, 6, 1, 0);
	newBounceEnemy(12, 6, -1, 0);

	newBounceEnemy(12, 9, 1, 0);
	newBounceEnemy(12, 9, -1, 0);

	//vertical
	newBounceEnemy(7, 9, 0, 1);
	newBounceEnemy(7, 9, 0, -1);

	newBounceEnemy(10, 9, 0, 1);
	newBounceEnemy(10, 9, 0, -1);

	newBounceEnemy(13, 9, 0, 1);
	newBounceEnemy(13, 9, 0, -1);

	newBounceEnemy(16, 9, 0, -1);

	//newBounceEnemy(19, 9, 0, -1);

	newBounceEnemy(22, 9, 0, 1);
	newBounceEnemy(22, 9, 0, -1);

	newBounceEnemy(25, 9, 0, 1);
	newBounceEnemy(25, 9, 0, -1);


	//for (b = 1; b < 9; b++) {newBounceEnemy(14, b, -1, 0);};
	//for (b = 1; b < 9; b++) {newBounceEnemy(14, b, 1, 0);};

	//for (b = 11; b < 19; b++) {newBounceEnemy(14, b, -1, 0);};
	//for (b = 11; b < 19; b++) {newBounceEnemy(14, b, 1, 0);};
	


	// bomb	
	for (b = 1; b < 24; b++) {newBombEnemy(b, 14);};
	//for (b = 13; b < 19; b++) {newBombEnemy(5, b);};

	// mines
	for (i = -120; i <= 120; i += 20) {newMineEnemy(19, 9, 10, "mine", i, 1, 1);}
	for (i = -120; i <= 120; i += 20) {newMineEnemy(19, 9, 10, "mine", i, 1,);}

	//for (i = -40; i <= 40; i += 20) {newMineEnemy(19, 9, 10, "mine", i, 1);}
	//for (i = -120; i <= 120; i += 20) {newMineEnemy(14, 9, 10, "mine", i, -2);}
}