const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	let source = fs.createReadStream(process.argv[3], {encoding: "utf8"});
	source.pipe(res);
});

server.listen(process.argv[2]);