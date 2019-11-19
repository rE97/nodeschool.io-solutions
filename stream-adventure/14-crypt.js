let crypto = require('crypto');

let decipher = crypto.createDecipher('aes-256-cbc', process.argv[2]);

process.stdin.pipe(decipher).pipe(process.stdout);