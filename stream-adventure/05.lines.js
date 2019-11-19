let through = require('through2');
let split = require('split');

let currentLine = 1;

let tr = through(function(buffer, encoding, next) {
	// check if current line is the even or odd,
	// if it's even then upper case the current line,
	// otherwise, lower case the current line
	let currentData = currentLine % 2 === 0
					? buffer.toString().toUpperCase()
					: buffer.toString().toLowerCase();

	this.push(currentData + '\n');
	currentLine ++;
	next();
});

process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout);