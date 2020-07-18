'use strict';

function maxTriSum(numbers){
	let sorted_arr = numbers.sort(function(a, b) {
		return a - b
	});
	sorted_arr = [... new Set(sorted_arr)] 
	console.log(sorted_arr)
	let sum = sorted_arr[sorted_arr.length - 1] + sorted_arr[sorted_arr.length - 2] + sorted_arr[sorted_arr.length - 3];
	return sum;
}