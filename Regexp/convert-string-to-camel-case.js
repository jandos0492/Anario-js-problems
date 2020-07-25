'use strict';

function toCamelCase(str){
	str = str.replace(/-|_/g, " ");
	let arr = str.split(" ");
	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].lenght);
	}
	return arr.join("")
}