const _ = require('lodash');

function filterCollections(collections) {
	return _.filter(collections, {'active': true});
}

module.exports = filterCollections;