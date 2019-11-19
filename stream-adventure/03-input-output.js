// this just mean that you pipe the stdin, into the stdout
// for example try to type this in cmd: echo 'HELLO' | node thisfilename.js
// you will get 'HELLO' as an output

process.stdin.pipe(process.stdout);