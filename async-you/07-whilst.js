const http = require('http')
	, async = require('async');

let totalRequest = 0
  , lastResponse = ''
  , url = process.argv[2];

async.whilst(
	function testResponse(cb) {
		cb(null, lastResponse !== 'meerkat');
	},

	function iterate(callback) {
		http.get(url, (res) => {
			totalRequest++;
			let body = '';

			res.setEncoding("utf8");
			res.on('data', (chunk) => body += chunk);
			res.on('end', () => {
				lastResponse = body.trim();
				callback()
			});
		}).on('error', (err) => {
			callback(err)
		})
	},

	function (err) {
		if (err) return console.error(err);
		console.log(totalRequest);
	})