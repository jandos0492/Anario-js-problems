'use strict';

function birdCode(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].replace(/\-/g, " ");
	}
	let finalArr = [];
	let finalStr = "";
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split(" ")
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length == 2) {
			finalStr = arr[i][0].slice(0, 2) + arr[i][1].slice(0, 2);
			finalArr.push(finalStr.toUpperCase());
		}
		else if (arr[i].length == 3) {
			finalStr = arr[i][0].slice(0, 1) + arr[i][1].slice(0, 1) + arr[i][2].slice(0, 2);
			finalArr.push(finalStr.toUpperCase());
		}
		else if (arr[i].length == 4) {
			finalStr = arr[i][0].slice(0, 1) + arr[i][1].slice(0, 1) + arr[i][2].slice(0, 1) + arr[i][3].slice(0, 1);
			finalArr.push(finalStr.toUpperCase());
		}
		else if (arr[i].length == 1) {
			finalStr = arr[i][0].slice(0, 4);
			finalArr.push(finalStr.toUpperCase());
		}
	}
	return finalArr
}