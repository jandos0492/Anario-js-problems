'use strict';

function findMissing(arr1, arr2) {
	arr1 = arr1.sort();
	arr2 = arr2.sort();
	let final_arr = [];
	if (arr1.length > arr2.length) {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] != arr2[i]) {
				final_arr.push(arr1[i]);
			}
		}
	}
	if (arr2.length > arr1.length) {
		for (let i = 0; i < arr2.length; i++) {
			if (arr1[i] != arr2[i]) {
				final_arr.push(arr2[i]);
			}
		}
	}
	return final_arr[0];
}