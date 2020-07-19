'use strict';

function rowSumOddNumbers(n) {
	let arr = [];
	let start_number = (n * n) - (n - 1);
	while (n > 0) {
		arr.push(start_number);
		start_number += 2
		n--;
	}
	let sum = arr.reduce((a, b) => a + b)
	return sum;
}