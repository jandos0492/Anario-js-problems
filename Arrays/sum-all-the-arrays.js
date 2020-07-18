'use strict';

function arraySum(arr) {
	let newArr = arr.toString().split(',');
	let finalArr = [];
	let sum = 0;
	for (let i = 0; i < newArr.length; i++) {
		newArr[i] = parseInt(newArr[i])  
	}
	for (let i = 0; i < newArr.length; i++) {
		if (Number.isInteger(newArr[i]) == true) {
			finalArr.push(newArr[i]);
		}
	}
		return sum = finalArr.reduce((a, b) => a + b)
}