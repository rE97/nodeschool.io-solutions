var fs = require('fs');
var filename = process.argv[2];

// ---- IMPORTANT ----
// fs.readFile or fs.readFileSync will return buffer if options is not specified
// see this link for more explanation: https://stackoverflow.com/a/49769985

var content = fs.readFileSync(filename, "utf8");

// process one by one
// numberOfNewLine = content.split('\n'); //split by new line, return as array
// numberOfNewLine = numberOfNewLine.length - 1; //we need to subtract by 1 because we don't need to count the last new line

// console.log(numberOfNewLine)

// one line process
console.log(content.split('\n').length - 1); //the same as the process above, but in one line