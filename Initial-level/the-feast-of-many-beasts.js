'use strict';

function feast(beast, dish) {
	if (beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length - 1) == dish.charAt(dish.length - 1)) {
		return true
	}
	else {
		return false
	}
}