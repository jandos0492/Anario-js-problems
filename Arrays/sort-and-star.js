'use strict';

function twoSort(s) {
	let sorted_str = s.sort();
	let word = sorted_str[0];
	let word_arr = word.split("").reduce((a, b) => a + "***" + b);
	return word_arr;
}