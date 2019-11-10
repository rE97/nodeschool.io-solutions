'use strict';

function parsedPromised(json) {
	return new Promise((resolve, reject) => {
		try {
			resolve(json)
		} catch(err) {
			reject(err)
		}
	})
}

parsedPromised(process.argv[2])
.catch(console.log);