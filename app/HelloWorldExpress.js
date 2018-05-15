// app/HelloWorldExpress.js
var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('<h1>Hello World! (Express)</h1>'+
		  '<a href="/Bye">Say Bye</a>');
});


app.get('/Bye', function(req, res) {
  res.send('<h2>Bye bye (Express)</h2>'+
		  '<a href="/">Say Hello</a>');
});

var port = 3001;
app.listen(port, function() {
  console.log('Running on port %d', port)
});
