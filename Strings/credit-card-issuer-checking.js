'use strict';

function getIssuer(number) {
	let str = number.toString();
	if ((str.substr(0, 2) == 34 || str.substr(0, 2) == 37) && str.length == 15) {
		return "AMEX";
	}
	else if (str.substr(0, 4) == 6011 && str.length == 16) {
		return "Discover";
	}
	else if ((str.substr(0, 2) == 51 || str.substr(0, 2) == 52 || str.substr(0, 2) == 53 || str.substr(0, 2) == 54 || str.substr(0, 2) == 55) && str.length == 16) {
		return "Mastercard";
	}
	else if (str.substr(0, 1) == 4 && (str.length == 13 || str.length == 16)) {
		return "VISA";
	}
	else {
		return "Unknown"
	}

}