'use strict';

function bump(x){
	let str = x.replace(/[^n]/g, "");
	let regex = /^n{0,15}$/g
	if (regex.test(str)) {
		return "Woohoo!";
	} else {
		return "Car Dead";
	}
}