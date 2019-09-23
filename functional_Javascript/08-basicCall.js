function duckCount(...args) {
	let quackCount = 0;
	for (var i = 0; i < args.length; i++) {
		if (Object.prototype.hasOwnProperty.call(args[i], 'quack') == true) quackCount++;
	}

	return quackCount;
}

// official solutions
// function duckCount() {
// 	return Array.prototype.slice.call(arguments).filter((obj) => {		// we use Array.prototype.slice.call(arguments, to convert arguemnts into an array)
// 		return Object.prototype.hasOwnProperty.call(obj, 'quack')
// 	}).length
// }

// other solutions
// function duckCount() {
// 	return [...arguments].filter((obj) => {								// basically, we are converting arguments into array using spread operator (ES6)
// 		return Object.prototype.hasOwnProperty.call(obj, 'quack')
// 	}).length
// }

// function duckCount() {
// 	return Array.from(arguments).filter((obj) => {						// the same as above, converting arguemnts into an array
// 		return Object.prototype.hasOwnProperty.call(obj, 'quack')
// 	}).length
// }

module.exports = duckCount;