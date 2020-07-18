'use strict';

function distinct(a) {
	let uniq = [...new Set(a)]
	return uniq;
}