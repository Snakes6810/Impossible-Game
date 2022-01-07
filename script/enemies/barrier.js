var barrier = [];
var key = [];
var keySize = 10;

// add new key to array
function newKey(x, y) {
	key.push(new rectangle(keySize * 2, keySize, "key", x * position, y * position));
}

// update keys on canvas
function updateKey() {
    for (i = 0; i < key.length; i += 1) {		
		key[i].update();
	}
}



// add new barrier piece to array
function newBarrier(x, y) {
	barrier.push(new rectangle(spacing, spacing, "barrier", x * position, y * position));
}
// add row of barriers (X location, Y Start, Length)
function newBarrierColumn(x, yStart, length) {
	for (i = 0 + yStart; i < length + 1; i += 1) {newBarrier(x, i);}
}
// add row of barriers (Y location, X Start, Length)
function newBarrierRow(y, xStart, length) {
	for (i = 0 + xStart; i < length + 1; i += 1) {newBarrier(i, y);}
}
 
// update barrier on canvas
function updateBarrier() {
    for (i = 0; i < barrier.length; i += 1) {		
		barrier[i].update();
	}
}


// run when character collects a key. Position is the position in key array
function collectKey(position) {
	// play sound
	unlockSound.play();
    
    // remove hit key 
	key.splice(position, 1);
    // if no more keys, remove barrier
    if (key.length == 0 || key.length == undefined) {
        //console.log("hit");
        // repeat 7 times, shrinking of barrier, for animation
        var j = 1;
        while (j < 7) {
            (function (j) {
                setTimeout(function () {
                    for (i = 0; i < barrier.length; i ++) {
                        var x = barrier[i].x;
                        var y = barrier[i].y;
                        barrier[i] = new rectangle(spacing / j, spacing, "barrier", x + j / 10, y);
                        //console.log(j);
                    }
                }, 50*j);
            })(j);
            j ++;;
        };
        // remove all barriers after 350ms
        setTimeout(function() {
            barrier = [];
        }, 350)
    }
}