var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.write('Hello World');
    res.end();
    // res.send() = res.write() + res.end()

}).listen(4242);
console.log('listening...');