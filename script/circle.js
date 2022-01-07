var rotationAmount = 0;

// multiple components can be created and used for different purposes
function circle(x, y, radius, type, fromCenter, speed, startPos) {
    this.gamearea = gameArea;   
	this.centerX = x;
    this.centerY = y;
	this.radius = radius;
	this.fromCenter = fromCenter;
	this.x = this.centerX + this.fromCenter;
	if (startPos == 1) {
    	this.y = this.centerY - this.fromCenter;
	} else {
    	this.y = this.centerY + this.fromCenter;
	}
	
	
	// angle in radians should only be calculated once
	this.angle = speed * (Math.PI / 180);
	//console.log(this.angle);

	// drawing a circle uses way too much memory to be printed every frame. must use pictures
    this.update = function() {
		if (type == "point") {
			gameArea.context.drawImage(images["point"], this.x, this.y, radius * 2, radius * 2);
		} else {
			if (type == "point") {
				console.log("collect point");
			} else if (type == "mine") {
				// update x and y coords
				var x2 = this.centerX + (this.x - this.centerX) * Math.cos(this.angle) - (this.y-this.centerY) * Math.sin(this.angle);
				var y2 = this.centerY + (this.x - this.centerX) * Math.sin(this.angle) + (this.y-this.centerY) * Math.cos(this.angle);
				this.x = x2;
				this.y = y2;
				// draw shape
				this.rotatePos();
				// draw center point
				//gameArea.context.drawImage(images["black_dot"], this.centerX - 2, this.centerY - 2, 4, 4);
			}
		}
    }

	// for moving cirlce horizontal/vertical
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }

	this.rotatePos = function() {
		// itterate rotation amount from 0-360 for image rotation
		if (rotationAmount < 360) {rotationAmount += (speed / 10 + 0.2);}
		else {rotationAmount = 0;}
		//console.log(rotationAmount);
		// rotate image
		gameArea.context.save();
		gameArea.context.translate(this.x + this.radius, this.y + this.radius);
		gameArea.context.rotate(- rotationAmount * Math.PI / 180.0);
		gameArea.context.drawImage(images["mine"], - radius, - radius, radius * 2, radius * 2);
		gameArea.context.restore();
	}
}


// My JsFiddle with working rotation code
// https://jsfiddle.net/Harry999/xy9uq7ed/57/