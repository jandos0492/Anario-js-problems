'use strict';

var summation = function (num) {
	let i = 0;
	let sum = 0;
	while (i <= num) {
		sum += i;
		i++;
	}
	return sum;
}