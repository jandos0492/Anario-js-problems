'use strict';

function averageString(str) {
	let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	str = str.split(" ").map(n => arr.indexOf(n));
		if(str.includes(-1)) { 
		return "n/a";
		}
	let sum = str.reduce( function(a, b) {
		return (a + b);
	});
	let average = Math.floor(sum / str.length);
	return arr[average];
}