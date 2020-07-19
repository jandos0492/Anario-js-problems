'use strict';

function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((a, b) => a + b);
    let average = Math.floor(sum / classPoints.length);
    if (yourPoints > average) {
		return true;
    }
    else {
		return false;
    }
}