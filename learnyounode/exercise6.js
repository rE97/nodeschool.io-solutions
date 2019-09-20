var lslib = require("./ls-lib.js")

lslib(process.argv[2], process.argv[3], (err, files) => {
	if(err) throw err;

	// using for loop
	// for(var i = 0; i < files.length; i++) {
	// 	console.log(files[i]);
	// }

	// using forEach
	files.forEach((file) => {
		console.log(file);
	});
});