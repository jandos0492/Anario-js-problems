'use strict';

function orderWord(s){
	if (Boolean(s) == false) {
		return "Invalid String!";
	}
	let splitted = s.split("");
	splitted.sort()
	let final_str = splitted.join("")
	return final_str
}