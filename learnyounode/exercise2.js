const args = process.argv.slice(2);

intArgs = args.map(Number) //convert array of string to array of integer

let sum = intArgs.reduce((accumulator, currentValue) => {
	return accumulator + currentValue
}, 0);

console.log(sum);