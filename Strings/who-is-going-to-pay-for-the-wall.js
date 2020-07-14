'use strict';

function whoIsPaying(name){
	let arr = [];
	if (name == "") {
		return [""];
	}
	else if (name.length == 1 || name.length == 2) {
		arr.push(name);
	}
	else {
		arr.push(name);
		arr.push(name.substr(0, 2));
	}
	return arr;
}