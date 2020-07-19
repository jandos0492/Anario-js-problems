'use strict';

let whatTimeIsIt = function(angle) {
	let totalMinutes = Math.floor(angle/.5);
	let hours = Math.floor(totalMinutes/60);
	let minutes = totalMinutes % 60;
	
	if(hours === 0) {
		hours = '12';
	}  
	if(angle === 0) {
		return '12:00';
	}
	if(String(minutes).length < 2) {
		minutes = 0 + String(minutes);
	}
	if(String(hours).length < 2) {
		hours = 0 + String(hours);
	}
	return hours + ":" + minutes;
}