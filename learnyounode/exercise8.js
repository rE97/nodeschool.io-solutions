const http = require("http");

http.get(process.argv[2], (res) => {
	const {statusCode} = res;

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

	var rawData = '';
	res.setEncoding("utf8");
	res.on('data', (chunk) => rawData += chunk);
	res.on('end', () => {
		console.log(rawData.length);
		console.log(rawData);
	});
}).on('error', console.error)