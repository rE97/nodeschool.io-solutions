const http = require('http')
	, async = require('async');

function getUrl(item, cb) {
	let body = '';

	http.get(item.toString().trimRight(), (res) => {
		res.setEncoding("utf8");
		res.on('data', (chunk) => body += chunk);
		res.on('end', () => cb(null, body));
	}).on('error', (err) => cb(err));
}

async.map(process.argv.slice(2), getUrl, function(err, results) {
	if (err) console.error(err);
	console.log(results);
})