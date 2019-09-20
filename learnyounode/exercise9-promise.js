const http = require("http");

let urlsArg = process.argv.slice(2);
let promises = urlsArg.map((urls) => promiseLoad(urls))

// let promises = [
// 	promiseLoad(process.argv[2]),
// 	promiseLoad(process.argv[3]),
// 	promiseLoad(process.argv[4]),
// ];

function promiseLoad(url) {
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			res.setEncoding("utf8");

			var rawData = '';
			res.on("data", (chunk) => rawData += chunk);
			res.on("end", () => {
				resolve(rawData);
			});
		});
	});
}

Promise.all(promises).then((res) => {
	for (var i = 0; i < promises.length; i++) {
		console.log(res[i]);
	}
});