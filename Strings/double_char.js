'use strict';

function doubleChar(str) {
	let finalStr = "";
	let i = 0;
	while (i < str.length) {
		finalStr = finalStr + str.charAt(i).repeat(2)
		i++;
	}
	return finalStr
}