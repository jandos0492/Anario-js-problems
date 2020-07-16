'use strict';

function findShort(str){
	if (typeof str === "object") {
		str = str.join(" ");
	}
	let arr = str.split(" ");
	let min = arr.reduce(function(a, b) {
		return a.length <= b.length ? a : b;
	})
	return min.length
}