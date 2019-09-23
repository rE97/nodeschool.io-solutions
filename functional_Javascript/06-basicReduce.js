function countWords(inputWords) {
	return inputWords.reduce((allWords, word) => {
		// if else operator
		// if (word in allWords) {
		// 	allWords[word]++;
		// } else {
		// 	allWords[word] = 1;
		// }

		// ternary operator
		// word in allWords ? allWords[word]++ : allWords[word] = 1;

		allWords[word] = ++allWords[word] || 1; // increment if property already exists otherwise initialize to 1
		return allWords;
	}, {}) // give {} as initial value for allWords
}

module.exports = countWords