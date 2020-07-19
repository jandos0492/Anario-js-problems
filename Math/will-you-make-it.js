'use strict';

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	if (mpg * fuelLeft >= distanceToPump) {
		return true;
	}
	return false
};