// ready reveal in
setTimeout(function(){ 
		$('.ready').addClass('active');
}, 200);

// this initializes the dialog box using some common options
$(function() {
	$("#dialog").dialog({
		autoOpen : false,
		modal : true,
		show : "blind",
		hide : "blind",
		dialogClass: "no-close",
		buttons: [
			// Close button
			{text: "Cancel",	click: function() {closeDialog();}},
			// Next Level
			{text: "Next level", click: function() {closeDialog();
				startNextLevel();
			}},
			// Try again
			{text: "Try again",	click: function() {closeDialog();
				startNextLevel(currentLevel);
			}},
		]
	});
});

function closeDialog() {
	$('#dialog').dialog("close");
	$('.ui-dialog-buttonpane button').button().hide();
};

// restart level button
$('#restart-btn').on('click', function(){ 
	gameArea.stop();
	startNextLevel(currentLevel)
});

// load level button
$('#load-btn').on('click', function(){ 
	gameArea.stop();
	timer.stop();
	startNextLevel(0);
});

// hide joystick button
$('#hide-joystick-btn').on('click', function(){ 
	if ($("#joystick-container").is(":visible")) {
		$('#hide-joystick-btn').html("Show Joystick");
		$("#joystick-container").hide();
	} else {
		$('#hide-joystick-btn').html("Hide Joystick");
		$("#joystick-container").show();
	}
});