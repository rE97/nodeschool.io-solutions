const _ = require('lodash');

function worker(data) {
	let totalIncome = _.reduce(data, (accu, elem) => accu + elem.income, 0);
	let size = _.size(data);
	let averageIncome = totalIncome / size;

	let underPerfomer = performerChecker(data, elem => elem.income <= averageIncome);
	let overPerformer = performerChecker(data, elem => elem.income > averageIncome);

	return {
		average: averageIncome,
		underperform: underPerfomer,
		overperform: overPerformer
	};
}

function performerChecker(data, filterCondition) {
	return _
	.chain(data)
	.filter(filterCondition)
	.sortBy('income');
}

module.exports = worker;