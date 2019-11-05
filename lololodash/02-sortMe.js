const _ = require('lodash');

function sorting(items) {
	// sortBy will only sort in ascending order, so if you want to sort it in descending order, you need to negative the value
	return _.sortBy(items, (item) => -item.quantity);

	// another solutions using reverse();
	// return _.sortBy(items, "quantity").reverse();
}

module.exports = sorting;