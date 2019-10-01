const http = require('http')
	, fs = require('fs')
	, async = require('async');

async.waterfall([
	function (cb) {
		fs.readFile(process.argv[2], 'utf8', (err, data) => {
			if (err) return cb(err);
			cb(null, data);
		});
	},

	function (data, cb) {
		let body = '';

		http.get(data.toString().trimRight(), (res) => {
			res.on('data', (chunk) => {
				body += chunk.toString();
			});
			
			res.on('end', () => {
				cb(null, body);
			});
		}).on('error', (err) => {
			cb(err);
		});
	}
], function(err, results) {
	if (err) return console.error(err);
	console.log(results);
})