var scale = 2; // zoom of game
var frameRate = 20; //frame rate of game in ms
var squareSize = 10; // size of character, walls etc.
var speed = 2; // speed at which character moves
let spacing = squareSize * scale; // spacing for each component. default is 20px
let position = 10 * scale; // position on X/Y at which objects are drawn. (4 = 80px)
var joyDir = "C" ;

// executed when body loads successfully
function createGame() {
	gameArea.create();
	startNextLevel(0);
}

// main function stored in here (gameArea.interval)
var gameArea = {
    canvas : document.createElement("canvas"),

    create : function() {
		this.canvas.setAttribute("id", "game");
        this.canvas.width = 300 * scale;
        this.canvas.height = 200 * scale;
        this.context = this.canvas.getContext("2d"); 
        document.body.insertBefore(this.canvas, document.body.childNodes[0]); // where canvas appears in body
		//listen for keydown events
        document.addEventListener('keydown', function (event) {
            gameArea.keys = (gameArea.keys || []);
            gameArea.keys[event.keyCode] = (event.type == "keydown");
			if((event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)
				&& event.target.nodeName=='BODY') {
					event.preventDefault(); //prevent default if it is body
			}
        })
		//listen for keyup events
        document.addEventListener('keyup', function (event) {
            gameArea.keys[event.keyCode] = (event.type == "keydown");  
			if((event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)
				&& event.target.nodeName=='BODY') {
				event.preventDefault(); //prevent default if it is body
			}          
        })
    }, 
	// start interval that redraws canvas once every (framerate) ms
	start : function() {this.interval = setInterval(redraw, frameRate);},
	// clear function, for reseting gameArea canvas to blank
    clear : function() {this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);},
	// used to clear interval if bugs are present or game over, level complete etc.
	stop : function() {clearInterval(this.interval);}
}


// runs every game tick (frameRate)
function redraw() {
	// get current compas position of joystick (SW / E / N / NE etc.)
	joyDir = joy.GetDir(); 

	// read timer
	time = Math.round(timer.getTime() / 10) / 100;
	// print time to html
	$('#time').html("Time: &nbsp;&nbsp;&nbsp;".concat(time.toString()));
	// clear canvas to blank
	gameArea.clear();

	// draw level select
	if (currentLevel == 0) {
		updateLevelSelect();
		//console.log("drawing level select")
	};

	// draw array of walls
	for (i = 0; i < walls.length; i += 1) {walls[i].update();}

	// draw goal
	if (goal != null) {goal.update();}

	// draw flame throwers below character
	if (flamesUpEnemy[0] != null) {updateFlamesUp();};
	if (flamesDownEnemy[0] != null) {updateFlamesDown();};

	// run character movement code
	if (character != null) {
		updateCharacter();
		// check for character collision with enemy types & goal
		checkCollisions();
	}	
	
	//draw barriers and keys
	if (barrier[0] != null) {updateBarrier();};
	if (key[0] != null) {updateKey();};

	// draw enemies above character
	if (bombEnemy[0] != null) {updateBomb();};
	if (bounceEnemy[0] != null) {updateBounce();};
	if (mineEnemy[0] != null) {updateMine();};	
	
}