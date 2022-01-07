// Create level components
function level15() {
	newCharacter(3, 1, "red");
	newGoal(28, 18, 1, 1);

	// barrier & keys
	newBarrierColumn(27, 17, 18);
	newBarrier(28, 17);
	// middle keys
	newKey(14, 3);
	newKey(14, 10);
	newKey(14, 16);
	// in walls
	newKey(22, 10);
	newKey(7, 10);
	// corners
	newKey(27, 2);
	newKey(2, 17);

	// bomb	outer walls
	for (b = 0; b < 30; b++) {newBombEnemy(b, 0);};
	for (b = 0; b < 30; b++) {newBombEnemy(b, 19);};
	for (b = 1; b < 19; b++) {newBombEnemy(0, b);};
	for (b = 1; b < 19; b++) {newBombEnemy(29, b);};

	// walls
	// top row
	newWallRow(1, 7, 22);

	// left columns
	newWallColumn(6, 1, 14);
	newWallColumn(9, 5, 14);

	// right columns
	newWallColumn(20, 5, 14);
	newWallColumn(23, 5, 18);

	// bottom row
	newWallRow(18, 7, 22);
	


	// enemies
	// bounce left column
	newBounceEnemy(7, 15, 0, -1);
	newBounceEnemy(7, 15, 0, 1);
	newBounceEnemy(8, 9, 0, -1);
	newBounceEnemy(8, 9, 0, 1);

	// bounce right column
	newBounceEnemy(21, 15, 0, -1);
	newBounceEnemy(21, 15, 0, 1);
	newBounceEnemy(22, 9, 0, -1);
	newBounceEnemy(22, 9, 0, 1);

	// bounce middle column
	for (b = 5; b < 15; b++) {newBounceEnemy(14, b, 1, 0);};


	// flames 
	newFlamesDownEnemy(11, 2, 20, 180);
	newFlamesDownEnemy(18, 2, 20, 180);
	newFlamesUpEnemy(17, 10, 20, 160);
	newFlamesUpEnemy(12, 10, 20, 160);

	
	// bomb
	//newBombEnemy(12, 17);

	

	// left mines
	for (i = -40; i <= 40; i += 20) {newMineEnemy(2, 6, 10, "mine", i, 2, 1);}
	for (i = -40; i <= 40; i += 20) {newMineEnemy(2, 6, 10, "mine", i, 2,);}

	for (i = -40; i <= 40; i += 20) {newMineEnemy(4, 15, 10, "mine", i, -2, 1);}
	for (i = -40; i <= 40; i += 20) {newMineEnemy(4, 15, 10, "mine", i, -2,);}

	// right mines
	for (i = -40; i <= 40; i += 20) {newMineEnemy(25, 4, 10, "mine", i, 2, 1);}
	for (i = -40; i <= 40; i += 20) {newMineEnemy(25, 4, 10, "mine", i, 2,);}

	for (i = -40; i <= 40; i += 20) {newMineEnemy(27, 11, 10, "mine", i, -2, 1);}
	for (i = -40; i <= 40; i += 20) {newMineEnemy(27, 11, 10, "mine", i, -2,);}

	for (i = -30; i <= 30; i += 20) {newMineEnemy(26, 17, 10, "mine", i, 2, 1);}
	for (i = -30; i <= 30; i += 20) {newMineEnemy(26, 17, 10, "mine", i, 2,);}
}