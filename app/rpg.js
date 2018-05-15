// app/sql.js
const xt = require('/QOpenSys/QIBM/ProdData/OPS/Node6/os400/xstoolkit/lib/itoolkit');

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	var a="Hello",b="World";	
	//a =req.query.a;  <-- riceve parametri da request
	//b =req.query.b;
	var plist='';
	
	var conn = new xt.iConn("*LOCAL");
	var pgm = new xt.iPgm("ZNODE_WS", {"lib":"SME_NEV"});
	pgm.addParam(a,'10A');
	pgm.addParam(b,'10A');
	pgm.addParam('','20A');
	conn.add(pgm);
	conn.run(function(str){
		console.log('XML-----------------------------');
		console.log(str);
		console.log('JSON----------------------------');
		console.log(xt.xmlToJson(str));
		plist=xt.xmlToJson(str)[0].data;
		console.log('JSON PLIST----------------------');
		console.log(plist);
		res.json(plist);
	});
});


var port = 3001;
app.listen(port, function() {
  console.log('Running on port %d', port)
});