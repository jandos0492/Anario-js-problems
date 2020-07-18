'use strict';

function find_average(array) {
    let sum = array.reduce((a, b) => a + b);
    let average = sum / array.length;
	return average;
}