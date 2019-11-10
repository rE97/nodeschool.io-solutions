'use strict';

function onRejected(error) {
	console.log(error);
}

let promise = new Promise(function (resolve, reject) {
	resolve('I FIRED');
	reject(Error('I DID NOT FIRE'));
})
.then(console.log, onRejected)