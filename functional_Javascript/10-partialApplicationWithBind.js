// official solutions
module.exports = function(namespace) {
	return console.log.bind(console, namespace)
}

// https://stackoverflow.com/a/28668819, for better understanding


// if you confused how the function will print the argument after called, look the following code
// let cl = console.log.bind(console)
// cl('argument here')
// the 'argument here' will be printed, even if console.log already called