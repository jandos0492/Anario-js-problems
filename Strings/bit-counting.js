'use strict';

var countBits = function(n) {
	let binary_num = n.toString(2);
	let arr = binary_num.split("");
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		(arr[i] == +arr[i]) ? result += +arr[i] : result = 0;
	}
	return result
};