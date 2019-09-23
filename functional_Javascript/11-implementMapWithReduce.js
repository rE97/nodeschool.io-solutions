module.exports = function arrayMap(arr, fn, thisArg) {
	return arr.reduce((allValues, currentValue) => {
		allValues.push(fn.call(thisArg, currentValue));
		return allValues;
	}, [])
}