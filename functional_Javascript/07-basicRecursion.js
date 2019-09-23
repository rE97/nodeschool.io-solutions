function reduce(arr, fn, initial) {
	return (function reducer(index, value) {
		if (index > arr.length - 1) return value;					// end condition, when index is bigger than array length, then we return the value (which is a reduce function)
		return reducer(index+1, fn(value, arr[index], index, arr))	// this the recursion, we increment the index by 1 each recursion, then we pass the fn to the value
	})(0, initial); // IIFE, this will initialize value for index = 0 and valuen = initial,
}

module.exports = reduce;