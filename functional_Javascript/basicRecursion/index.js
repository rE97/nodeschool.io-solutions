function reduce(arr, fn, initial) {
	return (function step(index, value) {
		if (index > arr.length -1) return value;
		return step(index+1, fn(value, arr[index], index, arr))
	})(0, initial) // IIFE, this is argument for current function (i.e. index = 0, and value = initial)
				   // see https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript/8228308#8228308, for more information
}

module.exports = reduce;