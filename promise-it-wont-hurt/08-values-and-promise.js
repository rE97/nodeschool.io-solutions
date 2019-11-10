'use strict';

function attachTitle(name) {
	return `DR. ${name}`;
}

let promise = new Promise((resolve, reject) => {
	resolve('MANHATTAN');
})
.then(attachTitle)
.then(console.log);