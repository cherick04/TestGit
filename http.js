
// Include http module.
var http = require("http");
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.

var express    = require('express');
var mysql      = require('mysql');


var server  = http.createServer(function (req, res) {
	if (req.method.toLowerCase() == 'get'){
		displayForm(res);
	} else if (req.method.toLowerCase() == 'post'){
		processForm(req, res);
	}
	
});

function displayForm(res) {
    fs.readFile('Registration_Form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}


function processForm(req, res) {
	
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'simon',
	  password : 'pass',
	  database : 'users'
	});

	var app = express();
	connection.connect(function(err){
		if(!err){
			console.log("Database is connected ...nn");
			console.log("I am here");}
		else{
			console.log("Error connection database ...nn");}
	});
		
	app.get("/", function(req, res){
	
	var query = connection.query('INSERT INTO userinfo set ?', fields , function(err, rows, fields){
	connection.end();
	if(!err)
		console.log('The solution is: ', rows);
	else
		console.log('Error while performing query');
		});
	});
	//app.listen(3000);
		
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.write('received the data:\n\n');
      res.end(util.inspect({
        field: fields,
        file: files
       }));
   });
}


server.listen(8080, '127.0.0.1');
console.log('Server listening on 8080 ...');

