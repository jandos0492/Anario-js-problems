'use strict';

function noSpace(x){
	let i = 0;
	while (x.charAt(i) != x.charAt(x.length)) {
		x = x.replace(" ", "");
		i++;
	}
	return x;
}