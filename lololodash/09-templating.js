const _ = require('lodash');

function worker(data) {
	let loginCount = _.size(data.login);
	let name = data.name;
	let templateString = 'Hello <%= name %> (logins: <%= loginCount %>)';
	let processedData = {
		name: name,
		loginCount: loginCount,
	};

	// shorter way 
	// let processedData = {
	// 	name,
	// 	loginCount
	// };

	return _.template(templateString)(processedData);
}

module.exports = worker;