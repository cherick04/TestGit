var express    = require('express');
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'simon',
  password : 'pass',
  database : 'users'
});


var app = express();

connection.connect(function(err){
	if(!err)
		console.log("Database is connected ...nn");
	else
		console.log("Error connection database ...nn");
});


app.get("/", function(req, res){
	var query = connection.query('SELECT * from userinfo',function(err, rows, fields){
	connection.end();
	if(!err)
		console.log('The solution is: ', rows);
	else
		console.log('Error while performing query');
	});
});

app.listen(3000);

