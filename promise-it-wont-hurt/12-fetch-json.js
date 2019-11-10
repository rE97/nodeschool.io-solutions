const http = require('q-io/http');

http.read('http://localhost:1337')
.then(response => console.log(JSON.parse(response)))
.catch(err => console.log(err));