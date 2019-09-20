var fs = require("fs");
var path = require("path");

module.exports = (dir, ext, callback) => {
	ext = "." + ext;
	fs.readdir(dir, "utf8", (err, files) => {
		if (err) return callback(err);

		// using forEach function, but you need to push the return value to array
		// fileList = [];
		// files.forEach((file) => {
		// 	if(path.extname(file) == ext) fileList.push(file);
		// });

		// using filter function, return value is an array, so you don't need to push into an empty array
		fileList = files.filter(file => {
			return path.extname(file) == ext; // return true if the extension is the same
		});

		callback(null, fileList);
	});
}