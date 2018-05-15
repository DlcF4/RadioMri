var http = require('http');
var port = 3001;

http.createServer(function(req, res) {  
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>Hello World</h1>')
}).listen(port, '0.0.0.0');

console.log('Server running at http://<host>:%d\ncrtl+c for exit', port)