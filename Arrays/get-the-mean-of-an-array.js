'use strict';

function getAverage(marks){
	let sum = marks.reduce((a, b) => a + b);
	return Math.floor(sum / marks.length)
}