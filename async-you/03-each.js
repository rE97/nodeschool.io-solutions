const http = require('http')
	, async = require('async');

async.each(process.argv.slice(2), function(item, cb) {
	http.get(item, (res) => {
		res.on('data', function(chunk) {
		});

		res.on('end', function() {
			cb(null);
		});
	}).on('error', function(err) {
		cb(err);
	});
}, 
function(err) {
	if (err) console.error(err);
});