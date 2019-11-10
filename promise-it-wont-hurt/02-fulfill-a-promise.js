'use strict';

let promise = new Promise(function (resolve, reject) {
	setTimeout( () => {
		resolve('FULFILLED!')
	}, 300);
})
.then((response) => {
	console.log(response);
})

// for better understanding about .then see the following link
// http://javascript.info/promise-basics#then