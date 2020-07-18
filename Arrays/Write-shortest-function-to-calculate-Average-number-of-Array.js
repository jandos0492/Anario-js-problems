'use strict';

function avg(a) {
	let sum = a.reduce((a, b) => (a + b)) / a.length;
	return sum
}