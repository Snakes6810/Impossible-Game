var walls = []; // array of wall locations as per level

// add new wall to array
function newWall(x, y) {
	walls.push(new rectangle(spacing, spacing, "wall", x * position, y * position));
}
// add row of walls (X location, Y Start, Length)
function newWallColumn(x, yStart, length) {
	for (i = 0 + yStart; i < length + 1; i += 1) {newWall(x, i);}
}
// add row of walls (Y location, X Start, Length)
function newWallRow(y, xStart, length) {
	for (i = 0 + xStart; i < length + 1; i += 1) {newWall(i, y);}
}

function outerWalls() {
	newWallRow(0, 0, 29);
	newWallRow(19, 0, 29);
	newWallColumn(0, 1, 18);
	newWallColumn(29, 1, 18);
}