const _ = require('lodash');

function chaining(collections) {
	return _
	.chain(collections)
	.map((collection) => collection + 'chained')
	.map((collection) => collection.toUpperCase())
	.sortBy()
	.value()
}

module.exports = chaining;