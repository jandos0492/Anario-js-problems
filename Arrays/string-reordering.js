'use strict';

function sentence(List) {
	return List.sort((curr, next) => Object.keys(curr)[0] - Object.keys(next)[0]).map(item => item[Object.keys(item)[0]]).join(' ');
}