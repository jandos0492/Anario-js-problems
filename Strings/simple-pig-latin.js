'use strict';

function pigIt(str){
	let regex = /\W/g;
	let arr = str.split(" ").map((a) => a.slice(1) + a[0]);
	for (let i = 0; i < arr.length; i++) {
		if (regex.test(arr[i]) == false) {
			arr[i] += "ay"
		}
	}
	return arr.join(" ");
}