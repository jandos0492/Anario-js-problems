'use strict';

function divisors(integer) {
	let i = 2;
	let arr = [];
	while (i < integer) {
		if (integer % i == 0) {
			arr.push(i)
		}
		i++
	}
	if (arr.length == 0) {
		return integer.toString() + " is prime"
	}
	return arr
};