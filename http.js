// Include http module.
//var http = require("http");
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var express    = require('express');
var mysql      = require('mysql');
var app = express();


app.get('/', function(req , res){
	displayForm(res);
});

app.post('/', function (req , res){
	processForm(req, res);
})

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


	connection.connect(function(err){
		if(!err){
			console.log("Database is connected ...nn");}
		else{
			console.log("Error connection database ...nn");}
	});



	var query = connection.query('INSERT INTO userinfo set ?', fields , function(err, rows, fields){

	if(!err)
		console.log('The solution is: ', rows);
	else
		console.log('Error while performing query');
	connection.end();
		});

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


app.listen(3000, '127.0.0.1');
console.log('Server listening on 3000 ...');
