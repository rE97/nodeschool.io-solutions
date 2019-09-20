const net = require("net");

const server = net.createServer((socket) => {
	let currentDate = new Date();
	let year = String(currentDate.getFullYear());
	let month = String(currentDate.getMonth()+1).padStart(2,'0');
	let date = String(currentDate.getDate()).padStart(2,'0');
	let hour = String(currentDate.getHours()).padStart(2,'0');
	let minute = String(currentDate.getMinutes()).padStart(2,'0');

	let currentDateTime = `${year}-${month}-${date} ${hour}:${minute}\n`;

	socket.end(currentDateTime);
});

server.on("error", (err) => {
	throw err;
});

server.listen(process.argv[2]);