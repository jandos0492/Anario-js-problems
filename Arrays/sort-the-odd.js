'use strict';

function sortArray(arr) {
	let index = arr.map((a, i) => a % 2 === 1 ? i : "").filter(a => a !== "");
	let odds = arr.filter(a => a % 2 === 1).sort((a, b) => a - b);
	for (let i = 0; i < index.length; i+=1) {
		arr[index[i]] = odds[i]
	}
	return arr
}