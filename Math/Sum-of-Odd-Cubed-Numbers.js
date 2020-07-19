'use strict';

function cubeOdd(arr) {
	let new_arr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 != 0) {
			new_arr.push(arr[i]);
		}
	}
	let sum = new_arr.map((a) => Math.pow(a, 3));
	if (new_arr.length > 0) {
		sum = sum.reduce((a, b) => a + b)
	}
	if (isNaN(sum)) {
		return undefined;
	}
	else if (new_arr.length == 0) {
		return 0;
	}
	return sum;
}