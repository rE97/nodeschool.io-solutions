let concat = require('concat-stream');

function gotString(data) {
	let s = (data.toString().split('').reverse().join(''));

	process.stdout.write(s);
}

// process.stdin.pipe(concat(function(data) {
// 	process.stdout.write(data.toString().split('').reverse().join(''))
// }));

process.stdin.pipe(concat(gotString));