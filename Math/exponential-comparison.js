'use strict';

function compare(...arr) {
	let largestSize = 0, largestLine = 0;
	for (let i = 0; i < arr.length; i++)
	{
	  let size = arr[i][1] * Math.log(arr[i][0]);
		if (size > largestSize)
		{
			largestSize = size;
			largestLine = i + 1;
		}
	}
	return arr[largestLine-1];
}