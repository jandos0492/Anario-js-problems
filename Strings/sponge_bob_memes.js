'use strict';

function spongeMeme(str) {
	let splitted = str.split("");
	for (let i = 0; i < splitted.length; i+=2) {
		splitted[i] = splitted[i].toUpperCase();
	}
	for (let i = 1; i < splitted.length; i+=2) {
		splitted[i] = splitted[i].toLowerCase();
	}
	let finalStr = splitted.join("");
	return finalStr
}