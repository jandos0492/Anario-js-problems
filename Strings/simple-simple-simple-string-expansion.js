'use strict';

function stringExpansion(s) {
	let newStr = "";
	let times = 1;
	for (let i = 0; i < s.length; i++) {
		if (s[i] == +s[i]) {
			times = s[i]; 
		}
		else {
			newStr = newStr + s[i].repeat(times);
		}
	}
	return newStr;
}