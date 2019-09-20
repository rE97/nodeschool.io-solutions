function countWords(inputWords) {
	return inputWords.reduce((allNames, name) => {
		// if (name in allNames) {
		// 	allNames[name]++;
		// } else {
		// 	allNames[name] = 1;
		// }

		// ternary operator
		// name in allNames ? allNames[name]++ : allNames[name] = 1;
		allNames[name] = ++allNames[name] || 1; // the same as above ternary operator (increment or initialize to 1)

		return allNames;
	}, {});
}

module.exports = countWords;