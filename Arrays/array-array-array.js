'use strict';

function explode(x){
	let sorted_arr = x
	let final_arr = [];
	if (Number.isInteger(sorted_arr[0]) == false && Number.isInteger(sorted_arr[1]) == false) {
		final_arr = "Void!";
	};
	if (Number.isInteger(sorted_arr[0]) == true && Number.isInteger(sorted_arr[1]) == false || Number.isInteger(sorted_arr[1]) == true && Number.isInteger(sorted_arr[0]) == false) {
		for (let i = 0; i < sorted_arr[0]; i++) {
			final_arr.push(x)
		}
		for (let i = 0; i < sorted_arr[1]; i++) {
			final_arr.push(x)
		}
	}
	if (Number.isInteger(sorted_arr[0]) == true && Number.isInteger(sorted_arr[1]) == true) {
		for (let i = 0; i < sorted_arr[0] + sorted_arr[1]; i++) {
			final_arr.push(x)
		}
	}
	return final_arr;
}