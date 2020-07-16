'use strict';

function vowelOne(str){
	let arr = str.split("");
	let vowel = /a|e|i|o|u/i;
	for (let i = 0; i < arr.length; i++) {
		(vowel.test(arr[i])) ? arr[i] = 1 : arr[i] = 0;
	}
	let finalStr = arr.join("");
	return finalStr
}