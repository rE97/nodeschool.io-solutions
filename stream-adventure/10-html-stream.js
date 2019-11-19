let trumpet = require('trumpet');
let through = require('through2');
let tr = trumpet();

tr.selectAll('.loud', function(elem) {
	let stream = elem.createStream();
	stream.pipe(through(function(buffer, encoding, next) {
		this.push(buffer.toString().toUpperCase());
		next();
	})).pipe(stream);
});

process.stdin.pipe(tr).pipe(process.stdout);