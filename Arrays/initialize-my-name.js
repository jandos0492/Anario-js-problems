'use strict';

function initializeNames(name){
	let arr = name.split(" ");
	if (arr.length > 2) {
		for (let i = 1; i < arr.length - 1; i++) {
			arr[i] = arr[i][0] + "."
		}
	}
	return arr.join(" ");
}