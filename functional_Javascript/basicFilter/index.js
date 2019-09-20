function getShortMessages(messages) {
	return filtered = messages.filter(value => {
		return value.message.length < 50;
	}).map(value => value.message);
}

module.exports = getShortMessages;