const _ = require('lodash');

function groupBy(collections) {
	let counted = [];

	let grouped = _.groupBy(collections, 'username');

	_.forEach(grouped, (value, key) => {
		counted.push({
			username: key,
			comment_count: _.size(value)
		});
	});

	return _.sortBy(counted, "comment_count").reverse();

	//alternative using a sortBy function
	// return _.sortBy(counted, (comment) => -comment.comment_count);
}

module.exports = groupBy;