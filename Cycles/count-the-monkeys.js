'use strict';

function monkeyCount(n) {
	let arr = [];
	let start = 1;
	while (start <= n) {
		arr.push(start);
		start++
	}
	return arr;
}