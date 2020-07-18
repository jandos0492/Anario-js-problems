'use strict';

function anagrams(word, words) {
	let a = []
	let str_arr = [];
	str_arr.push(word);
	let final_arr = [];
	let arr = words;
	let sorted_str = str_arr[0].split("").sort().join("");
	for (let i = 0; i < arr.length; i++) {
		a.push(arr[i].split("").sort().join(""))
	}
	for (let i = 0; i < a.length; i++) {
		if (a[i] == sorted_str) {
			final_arr.push(words[i])
		}
	}
	return final_arr
}