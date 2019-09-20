'use strict'

const http = require("http");
const url = require("url");

function parseTime(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixTime(time) {
	return { unixtime: time.getTime() }
}

const server = http.createServer((req, res) => {
	let parsedUrl = url.parse(req.url, true);
	let urlArg = parsedUrl.query.iso;
	let time = new Date(urlArg);
	let result;

	if (parsedUrl.pathname == '/api/parsetime') {
		result = parseTime(time);
	} else if (parsedUrl.pathname == '/api/unixtime') {
		result = unixTime(time);
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(process.argv[2]);

// node -pe "require('url').parse('/api/parsetime?iso=2013-08-10T12:10:15.474Z', true)"