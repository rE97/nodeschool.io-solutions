// official solution
function repeat(operation, num) {
	if (num <= 10) return
	operation()

	if (num % 10 === 0) {
		setTimeout(() => {				// https://flaviocopes.com/node-event-loop/, is a good read and explanation about event loop, basically setTimeout is put to the back of the queue, and will only shown after all the call stack is done
			repeat(operation, --num)
		}, 1)
	} else {
		repeat(operation, --num)
	}
}

module.exports = repeat;