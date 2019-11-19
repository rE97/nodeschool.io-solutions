let combine = require('stream-combiner');
let split = require('split');
let through = require('through2');
let zlib = require('zlib');

module.exports = function() {
	let genre = '';
	let thisGenre;

	let tr = through(function (buffer, encoding, next) {
		if (buffer.length == 0) return next();

		var obj = JSON.parse(buffer.toString());

		if (obj.type == 'genre') {
			if (thisGenre) {
				this.push(JSON.stringify(thisGenre) + '\n');
			}

			thisGenre = { books: [], name:obj.name };
		}
		else if (obj.type == 'book') {
			thisGenre.books.push(obj.name);
		}

		next();
	},
	function (done) {
		if(thisGenre) {
			this.push(JSON.stringify(thisGenre) + '\n');
		}

		done();
	});

	return combine(
			split(),
			tr,
			zlib.createGzip()
	);
}