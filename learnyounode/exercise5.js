var fs = require("fs");
var path = require("path");
var [,,dir, ext] = process.argv;

ext = "." + ext;

fs.readdir(dir, "utf8", (err, files) => {
	if (err) throw err;
	
	files.forEach((value) => {
		if (path.extname(value) == ext) console.log(value)
	});
});