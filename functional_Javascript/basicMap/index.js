function doubleAll(numbers) {
	let results = numbers.map(value => {
		return value * 2
	});

	return results;
}

module.exports = doubleAll;