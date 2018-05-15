// app/sql.js
const db = require('/QOpenSys/QIBM/ProdData/OPS/Node6/os400/db2i/lib/db2a');
const dbconn = new db.dbconn();
dbconn.conn("*LOCAL");

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	var sql='select \'Radio Mr i SQL example\'  text,current_timestamp datetime from sysibm.sysdummy2';
	stmt = new db.dbstmt(dbconn);
	stmt.exec(sql, 
	function (results, err) {
	    if (err) {
	    	res.json({sql: sql,resu:results,error:err});
	    } else {
	    	res.json(results);
	    }
	});
});


var port = 3001;
app.listen(port, function() {
  console.log('Running on port %d', port)
});