var firstPlay = false;

var backgroundMusic = new sound("sound/music_arcade_electro.mp3", 1, true);
var winSound = new sound("sound/win.mp3", 1);
var explosionSound = new sound("sound/explosion.mp3", 1);
var squishSound = new sound("sound/squish.mp3", 1);
var unlockSound = new sound("sound/unlock.mp3", 1);
var flamesSound = new sound("sound/flame_thrower.mp3", 0.4);
var burningSound = new sound("sound/burning.mp3", 1);

function sound(src, volume, loop) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.volume = volume; // only storing the variable in 'this.volume' for later use
	this.sound.volume = this.volume;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	if (loop) {this.sound.setAttribute("loop", "true")}
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function() {
		this.sound.play();
	}
	this.pause = function() {
		this.sound.pause();
	}
	this.stop = function() {
		this.sound.pause();
		this.sound.currentTime = 0;
	}
	this.isPlaying = function() {
		return !this.paused;
	}
	this.changeVolume = function(newVol) {
		this.sound.volume = 1 * newVol * this.volume;
	}
}

function changeMusicVolume(val) {
	var adjustBy = val / 100;
	//console.log('adjust by: ' + adjustBy);
	backgroundMusic.changeVolume(adjustBy);
    //console.log('new volume of bg music: ' + backgroundMusic.sound.volume);
	if (backgroundMusic.isPlaying()) {
		backgroundMusic.play();
	}
}

function changeSfxVolume(val) {
	var adjustBy = val / 100;
	winSound.changeVolume(adjustBy);
	explosionSound.changeVolume(adjustBy);
	squishSound.changeVolume(adjustBy);
	unlockSound.changeVolume(adjustBy);
	flamesSound.changeVolume(adjustBy);
	burningSound.changeVolume(adjustBy);
}

// for first user interaction with document, set volume and play music
$(document).ready(function(){
	$('body').mousedown(function () {
		changeMusicVolume(20);
		changeSfxVolume(20);
		$('body').off();
		//console.log("doing stuff")
	});
	$('body').mousemove(function () {
		changeMusicVolume(20);
		changeSfxVolume(20);
		$('body').off();
	});
	$('body').scroll(function () {
		changeMusicVolume(20);
		changeSfxVolume(20);
		$('body').off();
	});
	$('body').mouseup(function () {
		changeMusicVolume(20);
		changeSfxVolume(20);
		$('body').off();
	});
	$('body').click(function () {
		changeMusicVolume(20);
		changeSfxVolume(20);
		$('body').off();
	});
	$('body').keypress(function () {
		changeMusicVolume(20);
		changeSfxVolume(20);
		$('body').off();
	});
});

