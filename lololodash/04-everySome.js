const _ = require('lodash');

function checkEverySome(townData) {
	let classifiedTemp = {
		hot: [],
		warm: [],
	};

	_.forEach(townData, function(townTemp, townName) {
		if (_.every(townTemp, (temp) => temp > 19)) {
			classifiedTemp.hot.push(townName);
		} else if (_.some(townTemp, (temp) => temp > 19)) {
			classifiedTemp.warm.push(townName);
		}
	});

	return classifiedTemp;
};

module.exports = checkEverySome;