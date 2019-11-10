'use strict';

function alwaysThrow() {
	throw new Error('OH NOES');
}

function iterate(number) {
	console.log(number);
	return number + 1;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrow)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(console.log)