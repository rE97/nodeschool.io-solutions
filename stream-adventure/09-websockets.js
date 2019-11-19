const ws = require('websocket-stream');
const stream = ws('ws://localhost:8099');

// stream is actually a duplex stream, so you can read and write to it

stream.write('hello\n')