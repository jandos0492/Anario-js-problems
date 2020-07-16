'use strict';

function capitalizeWord(word) {
	word = word[0].toUpperCase() + word.substr(1, word.length - 1);
	return word;
}