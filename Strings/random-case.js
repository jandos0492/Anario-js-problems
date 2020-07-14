'use strict';

function randomCase(x) {
	let str = "";
	for(let i = 0; i < x.length; i++){
		if(Math.random() <= 0.5){
			str += x[i].toUpperCase();
		} 
		else {
			str += x[i].toLowerCase();
		}
	}
	return str;
}