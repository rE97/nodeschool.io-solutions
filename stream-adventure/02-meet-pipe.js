const fs = require('fs');

// fs.createReadStream will return a readable stream of the file content
let readFile = fs.createReadStream(process.argv[2])

// then you pipe the file content into the stdout.
readFile.pipe(process.stdout);