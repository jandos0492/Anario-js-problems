'use strict';

function solve(str) {
	console.log(str.charAt(0) == str.charAt(0).toUpperCase());
	let arr = str.split("");
	let upper = 0;
	let lower = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i].toUpperCase()) {
			upper++;
		}
		else {
			lower++;
		}
	}
	return (lower < upper) ? str = str.toUpperCase() : str = str.toLowerCase();
}