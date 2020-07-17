'use strict';

function accum(s) {
	let arr = s.split("");
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].repeat(i + 1);
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase();
	}
	return arr.join("-")
}