const _ = require('lodash');

function totalOrders(orders) {
	return _
	.chain(orders)
	.groupBy('article')
	.map((value, key) => {
		return {
			article: Number(key),
			total_orders: _.reduce(value, (acc, val) => acc + val.quantity, 0)
		};
	})
	.sortBy((value) => value.total_orders)
	.reverse()
}

// function totalOrders(orders) {
// 	return _.chain(orders)
// 	.reduce((accu, value) => {
// 		if (!accu[value.article]) {
// 			accu[value.article] = 0;
// 		}

// 		accu[value.article] += value.quantity;
// 		return accu;
// 	}, {})
// 	.reduce((result, value, key) => {
// 		result.push({article: Number(key), total_orders: value});
// 		return result;
// 	}, [])
// 	.sortBy('total_orders')
// 	.reverse()
// 	.value();
// }

module.exports = totalOrders;