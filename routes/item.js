var express = require('express');
var router = express.Router();

//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//host     : 'localhost',
//user     : 'root',
//password : '123456'
//});

var mysql= require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : '123456'
});

/* GET home page. */
router.post('/list', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
	connection.query('SELECT * FROM baibei.item', function(err, rows, fields) {
		
  		res.send(rows)
	});
});
router.post('/detail', function(req, res, next) {
	var aa=req.body.b;
		res.header('Access-Control-Allow-Origin','*');
		connection.query("SELECT * FROM baibei.item WHERE id='"+aa+"';", function(err, rows, fields) {
	
  		res.send(rows)
	})
});

module.exports = router;
