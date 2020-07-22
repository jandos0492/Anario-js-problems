'use strict';

const reverseSeq = n => {
	let arr = [];
	let i = 1;
	while (n >= i) {
		arr.push(n)
		n--;
	}
	return arr;
};