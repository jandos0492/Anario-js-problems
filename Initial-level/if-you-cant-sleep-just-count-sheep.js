'use strict';

let countSheep = function (num){
	let count = 1;
	let str = "";
	while (count <= num) {
		str = str + count + " sheep...";
		count++;
	}
	return str;
}