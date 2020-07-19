'use strict';

function differenceOfSquares(n){
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	let sum = arr.reduce((a , b) => (a + b));
	let square_sum = Math.pow(sum, 2);
	let sum_of_square = 0;
	for (let i = 0; i < arr.length; i++) {
		sum_of_square += Math.pow(arr[i], 2);
	}
	return square_sum - sum_of_square
}