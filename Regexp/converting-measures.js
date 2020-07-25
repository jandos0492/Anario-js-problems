'use strict';

function convertRecipe(recipe) {
	return recipe.replace(/(\d+\/?\d* tb?sp)/g, s => {
		let split = s.split(" ");
		return `${s} (${Math.ceil(eval(split[0]) * (split[1] === "tbsp" ? 15 : 5))}g)`;
	});
}