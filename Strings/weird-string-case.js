'use strict';

function toWeirdCase(str){
	let arr = str.split(" ");
	let final_arr = [];
	let final_arr_2 = [];
	for (let arr_i = 0; arr_i < arr.length; arr_i++) {
		var temp = arr[arr_i].split("");
		for (let temp_i = 0; temp_i < temp.length; temp_i++) {
			(temp_i % 2 === 0) ? temp[temp_i] = temp[temp_i].toUpperCase() : temp[temp_i] = temp[temp_i].toLowerCase()
		}
		final_arr.push(temp)
	}
	for (let i = 0; i < final_arr.length; i++) {
		final_arr_2.push(final_arr[i].join(""));
	}
	return final_arr_2.join(" ");
}