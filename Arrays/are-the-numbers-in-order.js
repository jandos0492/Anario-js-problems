'use strict';

function inAscOrder(arr) {
	let arr_2 = [];
	let arr_3 = [];
	for (let i = 0; i < arr.length; i++) {
		arr_2.push(arr[i]);
	}
	let final_arr = arr_2.sort(function(a, b) {
		return a - b;
	});
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == final_arr[i]) {
			arr_3.push(arr[i]);
		}
	}
	if (arr_3.length == arr.length) {
		return true;
	}
	else {
		return false;
	}
}