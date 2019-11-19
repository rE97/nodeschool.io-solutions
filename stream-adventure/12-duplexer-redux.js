let duplexer = require('duplexer2');
let through = require('through2');

module.exports = function(counter) {
	let counts = {};

	function counting(buffer, encoding, next) {
		// we check if counts[buffer.country] has a value or not
		// if it doesn't have value, then we use 0, 
		// otherwise we use the existing value.
		counts[buffer.country] = (counts[buffer.country] || 0) + 1;
		next();
	}

	function finishCounting(done) {
		counter.setCounts(counts);
		done();
	}

	let tr = through({ objectMode: true }, counting, finishCounting);
	return duplexer({ objectMode: true }, tr, counter);
}