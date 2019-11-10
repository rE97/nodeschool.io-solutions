const http = require('q-io/http');

http.read('http://localhost:7000')
.then((userId) => http.read(`http://localhost:7001/${userId}`))
.then((response) => console.log(JSON.parse(response)))
.catch((error) => console.log(error));