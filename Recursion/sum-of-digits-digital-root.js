'use strict';

function digital_root(n) {
	if ((n <= 9)) {
		return n
	}
	else {
		return digital_root(n.toString().split("").reduce((a, b) => {
			return a + +b;
		}, 0))
	}
}