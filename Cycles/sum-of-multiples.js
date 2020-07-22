'use strict';

function sumMul(n,m) {
	// console.log(typeof n)
	let arr = [];
	let i = n
	while (i < m) {
		arr.push(i);
		i = i + n;
	}
	if (arr.length == 0) {
		return "INVALID";
	}
	else {
		return arr.reduce((a, b) => a + b);
	}
}