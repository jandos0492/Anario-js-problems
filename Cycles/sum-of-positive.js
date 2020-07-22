'use strict';

function positiveSum(arr) {
	let sum = 0;
		let positive = arr.filter((num) => num > 0);
		for (let i = 0; i < positive.length; i++) {
			sum += positive[i]
		}
		return sum;
}