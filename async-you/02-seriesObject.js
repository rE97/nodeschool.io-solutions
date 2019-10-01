const http = require('http')
	, async = require('async');

function getUrl(url, cb) {
	let body = '';

	http.get(url.toString().trimRight(), (res) => {
		res.on('data', (chunk) => body += chunk.toString());
		res.on('end', () => cb(null, body));
	}).on('error', (err) => cb(err));
}

async.series({
	requestOne: function(cb) {
		getUrl(process.argv[2], cb);
	},

	requestTwo: function(cb) {
		getUrl(process.argv[3], cb);
	}

}, function(err, results) {
	if (err) return console.error(err);
	console.log(results);
})


// solutions using arrow function
// async.series({
// 	requestOne: (cb) => getUrl(process.argv[2], cb),
// 	requestTwo: (cb) => getUrl(process.argv[3], cb)
// }, (err, results) => {
// 	if (err) return console.error(err);
// 	console.log(results);
// })