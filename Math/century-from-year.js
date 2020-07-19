'use strict';

function century(year) {
	if (year < 100) {
		return 1;
	}
	return Math.ceil(year / 100);
}