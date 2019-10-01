const http = require('http')
	, async = require('async');

let hostname = process.argv[2]
  , port = process.argv[3]
  , url = `http://${hostname}:${port}`;

async.series({
	post: function(done) {
		async.times(5, function(n, next) {
			_createUser(++n, function(err) {
				next(err);
			});
		}, function next(err) {
			if (err) return done(err);
			done(null, 'saved');
		});
	},

	get: function(done) {
		http.get(url + '/users', function(res) {
			let body = '';
			res.on('data', function(chunk) {
				body += chunk.toString();
			});

			res.on('end', function() {
				done(null, body);
			});
		}).on('error', done);
	}

}, function done(err, results) {
	if (err) console.error(err);
	console.log(results.get);
});

function _createUser(user_id, next) {
	let postData = JSON.stringify({'user_id': user_id}),
	opts = {
		hostname: hostname,
		port: port,
		path: '/users/create',
		method: 'POST',
		headers: {
			'Content-Length': postData.length
		}
	};

	let req = http.request(opts, function(res) {
		// we need to "consume" all the data otherwise end event won't fire 
		// https://nodejs.org/api/stream.html#stream_event_end
		res.on('data', function(chunk){}); 

		res.on('end', function() {
			next();
		});
	}).on('error', function(err) {
		next(err);
	});

	req.write(postData);
	req.end();
}