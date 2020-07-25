'use strict';

function correct(str) {
	let arr = str.split("");
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "5") {
			arr[i] = "S";
		}
		else if (arr[i] == "0") {
			arr[i] = "O";
		}
		else if (arr[i] == "1") {
			arr[i] = "I";
		}
	}
	return arr.join("");
}