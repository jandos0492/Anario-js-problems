'use strict';

function wordsToMarks(str){
	let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let arr = str.split("");
	let final_arr = [];
	for(let j = 0; j < arr.length; j++) {
		for (let i = 0; i < abc.length; i++) {
			if (arr[j] == abc[i]) {
				final_arr.push(i + 1);
			}
		}
	}
	return final_arr.reduce((a, b) => a + b);
}