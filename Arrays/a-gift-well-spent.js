'use strict';

var buy = function(x, arr){
	let final_arr = [];
	let a = 0;
	let b = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j != arr.length; j++) {
			if (arr[i] + arr[j] == x && final_arr.length != 2 && i != j) {
			final_arr.push(i);
			final_arr.push(j);
			}
		}
	}
	if (final_arr.length < 2) {
		return null
	}
	return final_arr;
};