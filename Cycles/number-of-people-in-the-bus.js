'use strict';

var number = function(busStops){
	let arr = busStops;
	let people_in = 0;
	let people_off = 0;
	for (let i = 0; i < arr.length; i++) {
		people_in += arr[i][0];
		people_off += arr[i][1];
	}
	return people_in - people_off
}