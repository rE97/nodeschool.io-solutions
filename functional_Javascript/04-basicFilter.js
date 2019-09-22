// single line solutions
// function getShortMessage(messages) {
// 	return messages.filter((msg) => msg.message.length < 50).map((x) => x.message)
// }

// this is the same as the above solutions
function getShortMessage(messages) {
	return messages.filter((msg) => {
		return msg.message.length < 50		// we filter the messages array (argument) first to get the array which only contain message with length less than 50
	}).map((item) => {
		return item.message					// after we get the message with character less than 50, we then map it into 1 array containing all message, rather than 1 array for each message
	})
}

module.exports = getShortMessage