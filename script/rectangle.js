// multiple components can be created and used for different purposes
function rectangle(width, height, type, x, y, speedX, speedY) {
    this.gamearea = gameArea;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;    
    this.x = x;
    this.y = y;   
	
    this.update = function() {
		if (type == "wall") {gameArea.context.drawImage(images["wall"], this.x, this.y, this.width, this.height)
		} else if (type == "bomb") {gameArea.context.drawImage(images["bomb"], this.x, this.y, this.width, this.height)
		} else if (type == "barrier") {gameArea.context.drawImage(images["barrier"], this.x, this.y, this.width, this.height)
		} else if (type == "key") {gameArea.context.drawImage(images["key"], this.x, this.y, this.width, this.height)
		} else if (type == "bounce") {gameArea.context.drawImage(images["bounce"], this.x, this.y, this.width, this.height)
		} else if (type == "flamethrower") {gameArea.context.drawImage(images["flamethrower"], this.x, this.y, this.width, this.height)
		} else if (type == "flames1") {gameArea.context.drawImage(images["flames1"], this.x, this.y, this.width, this.height)
		} else if (type == "flames2") {gameArea.context.drawImage(images["flames2"], this.x, this.y, this.width, this.height)
		} else if (type == "flames3") {gameArea.context.drawImage(images["flames3"], this.x, this.y, this.width, this.height)
		} else if (type == "flames4") {gameArea.context.drawImage(images["flames4"], this.x, this.y, this.width, this.height)
		} else if (type == "flames5") {gameArea.context.drawImage(images["flames5"], this.x, this.y, this.width, this.height)
		} else if (type == "flames6") {gameArea.context.drawImage(images["flames6"], this.x, this.y, this.width, this.height)
		} else if (type == "flames7") {gameArea.context.drawImage(images["flames7"], this.x, this.y, this.width, this.height)
		} else if (type == "flames8") {gameArea.context.drawImage(images["flames5"], this.x, this.y, this.width, this.height)
		} else if (type == "flames9") {gameArea.context.drawImage(images["flames6"], this.x, this.y, this.width, this.height)
		} else if (type == "flames10") {gameArea.context.drawImage(images["flames7"], this.x, this.y, this.width, this.height)
		} else if (type == "flames11") {gameArea.context.drawImage(images["flames5"], this.x, this.y, this.width, this.height)
		} else if (type == "flames12") {gameArea.context.drawImage(images["flames6"], this.x, this.y, this.width, this.height)
		} else if (type == "flames13") {gameArea.context.drawImage(images["flames7"], this.x, this.y, this.width, this.height)
		} else if (type == "flames14") {gameArea.context.drawImage(images["flames5"], this.x, this.y, this.width, this.height)
		} else if (type == "flames15") {gameArea.context.drawImage(images["flames6"], this.x, this.y, this.width, this.height)
		} else if (type == "flames16") {gameArea.context.drawImage(images["flames7"], this.x, this.y, this.width, this.height)
		} else if (type == "flames17") {gameArea.context.drawImage(images["flames4"], this.x, this.y, this.width, this.height)
		} else if (type == "flames18") {gameArea.context.drawImage(images["flames3"], this.x, this.y, this.width, this.height)
		} else if (type == "flames19") {gameArea.context.drawImage(images["flames2"], this.x, this.y, this.width, this.height)
		} else if (type == "flames20") {gameArea.context.drawImage(images["flames1"], this.x, this.y, this.width, this.height)
 		} else if (type == "flames20") {gameArea.context.drawImage(images["flames1"], this.x, this.y, this.width, this.height)
		} else if (type == "char") {gameArea.context.drawImage(images["char"], this.x, this.y, this.width, this.height)
		} else if (type == "flamethrowerdown") {gameArea.context.drawImage(images["flamethrowerdown"], this.x, this.y, this.width, this.height)
		} else if (type == "flames1down") {gameArea.context.drawImage(images["flames1down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames2down") {gameArea.context.drawImage(images["flames2down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames3down") {gameArea.context.drawImage(images["flames3down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames4down") {gameArea.context.drawImage(images["flames4down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames5down") {gameArea.context.drawImage(images["flames5down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames6down") {gameArea.context.drawImage(images["flames6down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames7down") {gameArea.context.drawImage(images["flames7down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames8down") {gameArea.context.drawImage(images["flames5down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames9down") {gameArea.context.drawImage(images["flames6down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames10down") {gameArea.context.drawImage(images["flames7down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames11down") {gameArea.context.drawImage(images["flames5down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames12down") {gameArea.context.drawImage(images["flames6down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames13down") {gameArea.context.drawImage(images["flames7down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames14down") {gameArea.context.drawImage(images["flames5down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames15down") {gameArea.context.drawImage(images["flames6down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames16down") {gameArea.context.drawImage(images["flames7down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames17down") {gameArea.context.drawImage(images["flames4down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames18down") {gameArea.context.drawImage(images["flames3down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames19down") {gameArea.context.drawImage(images["flames2down"], this.x, this.y, this.width, this.height)
		} else if (type == "flames20down") {gameArea.context.drawImage(images["flames1down"], this.x, this.y, this.width, this.height)
		} else if (type == "chardown") { gameArea.context.drawImage(images["chardown"], this.x, this.y, this.width, this.height)
		} else if (type == "explosion1") {gameArea.context.drawImage(images["explosion1"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion2") {gameArea.context.drawImage(images["explosion2"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion3") {gameArea.context.drawImage(images["explosion3"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion4") {gameArea.context.drawImage(images["explosion4"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion5") {gameArea.context.drawImage(images["explosion5"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "explosion6") {gameArea.context.drawImage(images["explosion6"], this.x - bombSize * 2.75, this.y - bombSize * 2.4, bombSize * 6, bombSize * 6)
		} else if (type == "black_dot") {gameArea.context.drawImage(images["black_dot"], this.x, this.y, 10, 10);
		} else {
			gameArea.context.fillStyle = type;
			gameArea.context.fillRect(this.x, this.y, this.width, this.height);
		}
    }

    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }   

	this.rotatePos = function(amount) {
		gameArea.context.save();
		gameArea.context.translate(this.x + this.width / 2, this.y + this.height / 2);
		gameArea.context.rotate(amount * Math.PI / 180.0);
		gameArea.context.fillStyle = type;
		gameArea.context.fillRect(this.width / (20 - this.width), this.height / (20 / this.height), this.width, this.height);
		gameArea.context.restore();
	}

	// return true if the rectangle and circle are colliding
	this.crashCircle = function(circle) {
		var distX = Math.abs((circle.x + circle.radius) - this.x - this.width/2);
		var distY = Math.abs((circle.y + circle.radius) - this.y - this.height/2);

		if (distX > (this.width/2 + circle.radius)) { return false; };
		if (distY > (this.height/2 + circle.radius)) { return false; };

		if (distX <= (this.width/2)) { return true; };
		if (distY <= (this.height/2)) { return true; };

		var dx=distX-this.width/2;
		var dy=distY-this.height/2;
		return (dx*dx+dy*dy<=(circle.radius*circle.radius));
	}

	// collision detection
	this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
	// top of (this) collision detection with bottom of (otherobj)
	this.crashTop = function(otherobj) {
		var crashtop = false;
        if (this.y == otherobj.y + (otherobj.height) &&
			this.x < otherobj.x + (otherobj.width) &&
			this.x + (this.width) > otherobj.x) {
			crashtop = true;
		}
        return crashtop;
    }
	// bottom of (this) collision detection with top of (otherobj)
	this.crashBottom = function(otherobj) {
        var crashbottom = false;
        if (this.y + (this.height) == otherobj.y &&
			this.x < otherobj.x + (otherobj.width) &&
			this.x + (this.width) > otherobj.x) {
			crashbottom = true;
		}
        return crashbottom;
    }
	// left of (this) collision detection with right of (otherobj)
	this.crashLeft = function(otherobj) {
		var crashleft = false;
        if (this.x == otherobj.x + (otherobj.width) &&
			this.y < otherobj.y + (otherobj.height) &&
			this.y + (this.height) > otherobj.y) {
			crashleft = true;
		}
        return crashleft;
    }
	// right of (this) collision detection with left of (otherobj)
	this.crashRight = function(otherobj) {
        var crashright = false;
        if (this.x + (this.width) == otherobj.x &&
			this.y < otherobj.y + (otherobj.height) &&
			this.y + (this.height) > otherobj.y) {
			crashright = true;
		}
        return crashright;
    }
}