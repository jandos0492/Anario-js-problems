'use strict';

function solve(arr){  
	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',   'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let count = 0;
	let num_of_solved = [];
	for (let i = 0; i < arr.length; i++) {
		let index = arr[i];
		for (let j = 0; j < index.length; j++) {
			if (index[j].toLowerCase() == alphabet[j]) {
				count++;
			}
		}
		num_of_solved.push(count);
		count = 0;
	}
	return num_of_solved;
};