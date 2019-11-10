'use strict';

function all(promiseOne, promiseTwo) {
	return new Promise((resolve, reject) => {
		let count = 0, values = new Array(2);

		function checkCounter() {
			if (++count == 2) {
				resolve(values);
			}
		}

		promiseOne.then((response) => {
			values[0] = response;
			checkCounter();
		});

		promiseTwo.then((response) => {
			values[1] = response;
			checkCounter();
		});
	});
}

// getPromise1 and getPromise2 is a global variable provided
all(getPromise1(), getPromise2()).then(console.log);