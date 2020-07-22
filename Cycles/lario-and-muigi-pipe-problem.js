'use strict';

function pipeFix(num){
	let arr = [];
	for (let i = num[0]; i < num[num.length - 1]; i++) {
		if (num[i] == num[i++]) {
			arr.push(i--);
		}
	}
	arr.unshift(arr[0] - 1);
	return arr
  }