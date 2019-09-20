const http = require("http");

let results = [];
let count = 0;
let [,, ...urls] = process.argv;

function httpGet(index) {
	http.get(process.argv[2 + index], (res) => {
		const { statusCode } = res;

		var error;
		if (statusCode !== 200) {
			error = new Error(`Request Faield.
								Status Code: ${statusCode}`);
		}

		if (error) {
			console.log(error.message);

			res.resume();
			return;
		}

		var rawData = ''
		res.setEncoding("utf8");
		res.on('data', (chunk) => rawData += chunk);
		res.on('end', () => {
			results[index] = rawData;
			count++;

			if (count == 3) {
				for (var i = 0; i < 3; i++) {
					console.log(results[i]);
				}
			}
		});
	}).on('error', console.error);
}

for (var i = 0; i < urls.length; i++) {
	httpGet(i);
}