'use strict';

function findOutlier(arr){
	let odds = [];
	let even = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			even.push(arr[i]);
		}
		else {
			odds.push(arr[i]);
		}
	}
	if (even.length > odds.length) {
		return +odds.join("")
	}
	else {
		return +even.join("");
	}
}