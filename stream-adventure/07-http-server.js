const http = require('http');
const through = require('through2');

let tr = through(function write(buffer, encoding, next) {
		 this.push(buffer.toString().toUpperCase());
		 next()
	}, function end(done) {
		done();
	});

const server = http.createServer((req, res) => {
	if(req.method === 'POST'){
		req.pipe(tr).pipe(res);
	}
	else res.end('send me a POST\n')
})

server.listen(process.argv[2]);