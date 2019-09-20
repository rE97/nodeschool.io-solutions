const http = require("http");

const server = http.createServer((req, res) => {
	if (req.method !== "POST") {
		return res.end("Send me a POST\n")
	}

	let rawData = '';
	req.on("data", chunk => rawData += chunk);
	req.on("end", () => {
		rawData = rawData.toUpperCase();
		res.write(rawData);
		res.end();
	});
});

server.listen(process.argv[2])

// console.log(process.argv);