var http = require("http");

http.get(process.argv[2], (res) => {
	const { statusCode } = res; // shorter way of const statusCode = res.statusCode;

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

	res.setEncoding("utf8");
	// res.on('data', (chunk) => { console.log(chunk) });
	res.on('data', console.log) // shorter way
	res.on('error', console.error)
}).on('error', console.error);