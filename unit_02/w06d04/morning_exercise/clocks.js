var calculate = function(hourhand, minutehand) {

	if (hourhand > 12 || hourhand < 0 || minutehand < 0 || minutehand > 59) { return "out of range" ;}

	var hoursToMinutes = (hourhand * 5) + (minutehand / 12);
	var minutes        = minutehand;

	if (hoursToMinutes > 60) { hoursToMinutes -= 60 ;}

	var angle;

	if (hoursToMinutes > minutes) {
		angle = (hoursToMinutes - minutes) * 6;
	} else {
		angle = (minutes - hoursToMinutes) * 6;
	}

	return [angle, 360 - angle];

};

// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
