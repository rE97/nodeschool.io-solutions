function logger(namespace) {
	return function() {				// we return a function so the next arguments will be passed here
		let args = [...arguments]
		console.log.apply(console, [namespace].concat(args))
	}
}

module.exports = logger;