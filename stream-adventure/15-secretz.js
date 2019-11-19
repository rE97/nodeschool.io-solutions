let tar = require('tar');
let zlib = require('zlib');
let crypto = require('crypto');
let concat = require('concat-stream');

let ciphername = process.argv[2];
let passphrase = process.argv[3];
let parser = new tar.Parse();
parser.on('entry', function(e) {
	if (e.type != 'File') return e.resume();

	var hashStream = crypto.createHash('md5', { encoding: 'hex' });
	e.pipe(hashStream)
	.pipe(concat(function (hash) {
		console.log(hash + ' ' + e.path);
	}))
});

let decrypter = crypto.createDecipher(ciphername, passphrase);

process.stdin
		.pipe(decrypter)
		.pipe(zlib.createGunzip())
		.pipe(parser);