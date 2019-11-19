// for more information about through2, you can read it at https://www.npmjs.com/package/through2

let through = require('through2');

function write(buffer, encoding, next) {
	// i don't really understand this
	// based on documentation this.push will add the chunk into the internal queue for users of the stream to consume.
	// see https://nodejs.org/api/stream.html#stream_readable_push_chunk_encoding
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done) {
	done();
}

let stream = through(write, end);

// you pipe a stdin which is a DUPLEX stream, into the stream variable, then pipe it into the stdout
process.stdin.pipe(stream).pipe(process.stdout);