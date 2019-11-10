'use strict';

function onReject(error) {
	console.log(error.message);
}

let promise = new Promise(function (resolve, reject) {
	setTimeout( () => {
		reject(Error('REJECTED!'))
	}, 300);
})
// for better understanding about .then see the following link
// http://javascript.info/promise-basics#then
.then(null, onReject);

// you can use .catch if you are only interested in errors.
// this is a shorthand for .then(null, rejected)
// .catch(onReject)