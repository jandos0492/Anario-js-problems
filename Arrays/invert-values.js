'use strict';

function invert(array) {
	let arr = array;
	for (let i = 0; i < arr.length; i++) {
	  arr[i] = arr[i] * -1;
	}
	return arr;
}