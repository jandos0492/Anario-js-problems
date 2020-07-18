'use strict';

function arraysSimilar(arr1, arr2) {
	let sorted_arr_1 = arr1.sort();
	let sorted_arr_2 = arr2.sort();
	for (let i = 0; i < arr1.length; i++) {
		if (typeof arr1[i] == "string" || typeof arr2[i] == "string") {
			return false;
		}
	}
	if (sorted_arr_1.join(",") === sorted_arr_2.join(",")) {
		return true
	}
	else {
		return false;
	}
}