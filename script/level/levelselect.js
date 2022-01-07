var levelSelector = [];
var mouseX = 0;
var mouseY = 0;

class LevelSelect {
    constructor(name, x, y) {
        this.name = name
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 66;
        this.selected = false;
    }
}

// create level select components
function createLevelSelect() {
    outerWalls();
    levelSelector.push(new LevelSelect("Placeholder", -100, -100));
    for (i = 1; i < 6; i ++) {
        levelSelector.push(new LevelSelect("Level ".concat(i.toString()), i * 110 - 80, 30));
    }
    for (i = 6; i < 11; i ++) {
        levelSelector.push(new LevelSelect("Level ".concat(i.toString()), (i-5) * 110 - 80, 150));
    }
    for (i = 11; i < 16; i ++) {
        levelSelector.push(new LevelSelect("Level ".concat(i.toString()), (i-10) * 110 - 80, 270));
    }
    //console.log(levelSelector)
}

// draw level select components once per frame
function updateLevelSelect() {
    for (i = 1; i < levelSelector.length; i ++) {
        var x = levelSelector[i].x;
        var y = levelSelector[i].y;
        var width = levelSelector[i].width;
        var height = levelSelector[i].height;
        var imgName = "level".concat(i.toString());
        var levelName = "level ".concat(i.toString());
        var bestTime = "Best time: ------"
        if (bestTimes[i] != null) {
            bestTime = "Best time: ".concat(bestTimes[i].toString().concat("s"));
        }
    
        // draw background depending if level unlocked
        if (bestTimes[i - 1] != null) {
            if (mouseY > levelSelector[i].y - 3 &&
                mouseY < levelSelector[i].y - 3 + levelSelector[i].height  + 40 &&
                mouseX > levelSelector[i].x - 3 &&
                mouseX < levelSelector[i].x - 3 + levelSelector[i].width + 6)
            {
                gameArea.context.globalAlpha = 1;
                gameArea.context.fillStyle = "green";       
            } else {
                gameArea.context.globalAlpha = 0.5;
                gameArea.context.fillStyle = "green";
            }
            gameArea.context.fillRect(x - 3, y - 3, width + 6, height + 40);
        } else {
            gameArea.context.globalAlpha = 0.5;
            gameArea.context.fillStyle = "red";
			gameArea.context.fillRect(x - 3, y - 3, width + 6, height + 40);
        }
        gameArea.context.globalAlpha = 1;
        // draw level image
        gameArea.context.drawImage(images[imgName], x , y, width, height);
        // write level name & best time
        gameArea.context.fillStyle = "black";
        gameArea.context.font = "bold 14px Arial";
        gameArea.context.fillText(levelName, x + 30, y + 80);
        gameArea.context.font = "12px Arial";
        gameArea.context.fillText(bestTime, x + 5, y + 95);
    }
    // console.log("tick");
}


$("body").mousemove(function(e) {
    mouseX = e.pageX - gameArea.canvas.offsetLeft;
    mouseY = e.pageY - gameArea.canvas.offsetTop;
})

// Add event listener for `click` events.
gameArea.canvas.addEventListener('click', function(event) {
    //console.log("click");
    for (i = 0; i < levelSelector.length; i ++) {
        if (mouseY > levelSelector[i].y - 3 &&
            mouseY < levelSelector[i].y - 3 + levelSelector[i].height  + 40 &&
            mouseX > levelSelector[i].x - 3 &&
            mouseX < levelSelector[i].x - 3 + levelSelector[i].width + 6) {
            //console.log('clicked an element');
            loadLevel(i);
        }        
    };
}, false);