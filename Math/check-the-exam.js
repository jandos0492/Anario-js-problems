'use strict';

function checkExam(arr1, arr2) {
	let correct = 0;
	let mistake = 0;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[i] && arr1[i] != "" && arr2[i] != "") {
			correct += 4;
		}
		else if (arr1[i] !== arr2[i] && arr1[i] != "" && arr2[i] != "") {
			mistake += 1;
		}
	}
	if (correct - mistake < 0) {
		return 0;
	}
	return correct - mistake
}