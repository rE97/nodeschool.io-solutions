// module.exports = function arrayMap(arr, fn) {
// 	let  results = [];
// 	arr.reduce((previousValue, currentValue, index, array) => {
// 		results.push(fn(currentValue));
// 	}, null);

// 	return results;
// };

// official solution
module.exports = function arrayMap(arr, fn, thisArg) {
	return arr.reduce((acc, item, index, arr) => {
		acc.push(fn.call(thisArg, item, index, arr)) // <--- thisArg will give this value of fn, and the rest parameters value is the same as current arguments, we don't need to send acc because acc is used as container for all value
		return acc
	}, []) // <--- initialValue (acc) is array []
}