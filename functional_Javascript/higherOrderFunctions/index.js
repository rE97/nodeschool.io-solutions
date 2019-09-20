function repeat(operation, num) {
	// the following is the loop solution
	// for (let i = 0; i < num; i++) {
	// 	operation();
	// }

	// the following is the recursion solution
	if (num <= 0) return;
	operation()
	repeat(operation, --num);
}

module.exports = repeat;