'use strict';

function findNeedle(arr) {
	let num = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "needle") {
			num = i;
		}
	}
	return 'found the needle at position' + " " + num.toString()
}