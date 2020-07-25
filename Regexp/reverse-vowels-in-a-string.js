'use strict';

function reverseVowels(str) {
	let vowel_arr = str.replace(/[^aeiou]/gi, "").split("");
	let arr = str.split("");
	let final_str = "";
	let new_str = arr.join();
	for (let j = 0; j < arr.length; j++) {
		if (/[aeiou]/gi.test(arr[j])) {
			arr[j] = vowel_arr[vowel_arr.length - 1];
			vowel_arr.pop(vowel_arr[j]);
		}
	}
	return arr.join("hui").replace(/hui/g, "");
}