'use strict';

function digitize(n) {
	let arr = n.toString().split("");
	let final_arr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		final_arr.push(+ arr[i])
	}
	return final_arr
}