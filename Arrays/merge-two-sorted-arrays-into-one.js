'use strict';

function mergeArrays(arr1, arr2) {
	let merged_arr = arr1.concat(arr2);
	merged_arr = merged_arr.sort((a, b) => a - b);
	let uniq = [... new Set(merged_arr)];
	return uniq;
}