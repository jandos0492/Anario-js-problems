'use strict';

function squareSum(numbers){
	if (numbers.length == 0) {
		return 0;
	}
	return numbers.map((a) => Math.pow(a, 2)).reduce((prev, cur) => prev + cur);
}