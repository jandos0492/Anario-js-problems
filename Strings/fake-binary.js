'use strict';

function fakeBin(x) {
	let arr = x.split("");
	for (let i = 0; i < arr.length; i++) {
		arr[i] = +arr[i];
		(arr[i] < 5) ? arr[i] = 0 : arr[i] = 1;
	}
	let binary_str = arr.join("");
	return binary_str
}