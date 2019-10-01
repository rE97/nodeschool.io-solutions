const http = require('http')
	, async = require('async');

async.reduce(['one', 'two', 'three'], 0, function (memo, item, callback) {
	let body = '';

	http.get(`${process.argv[2]}?number=${item}`, (res) => {
		res.setEncoding("utf8");
		res.on('data', (chunk) => body += chunk);
		res.on('end', () => {
			callback(null, memo + Number(body))
		})
	}).on('error', (err) => callback(err))

}, function (err, results) {
	if (err) return console.error(err);
	console.log(results)
})