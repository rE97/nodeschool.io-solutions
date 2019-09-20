function duckCount(...args) {
	let quackCount = 0;
	for (var i = 0; i < args.length; i++) {
		if (Object.prototype.hasOwnProperty.call(args[i], 'quack') == true) {
			quackCount++
		}
	}
	return quackCount;

	// official solution
	// return Array.prototype.slice.call(args).filter((obj) => {
	// 	return Object.prototype.hasOwnProperty.call(obj, 'quack');
	// }).length
}

module.exports = duckCount;