'use strict';

function createPhoneNumber(numbers){
	let state_code = "(" + numbers[0] + numbers[1] + numbers[2] + ") ";
	let first_part = state_code + numbers[3] + numbers[4] + numbers[5] + "-";
	let full_number = first_part + numbers[6] + numbers[7] + numbers[8] + numbers[9];
	return full_number;
}