'use strict';

function discoverOriginalPrice(discountedPrice, salePercentage){
	let op = +discountedPrice / (1 - (+salePercentage / 100));
	if (Number.isInteger(+op) == false) {
		op = +op.toFixed(2)
	}
	return op
}