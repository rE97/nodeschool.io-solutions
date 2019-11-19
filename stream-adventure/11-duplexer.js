let spawn = require('child_process').spawn;
let duplexer = require('duplexer2');

module.exports = function(cmd, args) {
	let child = spawn(cmd, args);

	return duplexer(child.stdin, child.stdout);
};