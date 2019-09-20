// solutions of: https://github.com/franklingu/nodeschool-solutions/blob/master/functional-javascript-workshop/trampoline.js
// function repeat(operation, num) {
// 	if (num <= 0) {
// 		return;
// 	}

// 	return function() {
// 		operation();
// 		return repeat(operation, --num);
// 	}
// }

// function trampoline(fn) {
// 	let next = fn;

// 	while(next) {
// 		next = next();
// 	}
// }

// module.exports = function(operation, num) {
// 	trampoline(function () {
// 		return repeat(operation, num);
// 	});
// }

// official solutions
function repeat(operation, num) {
	return function() {
		if (num <= 0) {
			return;
		}
		operation();
		return repeat(operation, --num);
	}
}

function trampoline(fn) {
	while(fn && typeof fn === 'funciton') {
		fn = fn();
	}
}

module.exports = function(operation, num) {
	trampoline(function() {
		return repeat(operation, num);
	});
}