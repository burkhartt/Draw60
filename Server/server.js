var fs = require("fs");
var host = "127.0.0.1";
var port = 3000;
var express = require("express");
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');
var random = require('mongoose-random');
var Schema = mongoose.Schema;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/WebSite"));

var drawingSchema = mongoose.Schema({id: mongoose.Schema.Types.ObjectId, 
									 drawing: mongoose.Schema.Types.Mixed});
drawingSchema.plugin(random, { path: 'r' }); // by default `path` is `random`. It's used internally to store a random value on each doc.

var Drawing = mongoose.model('drawing', drawingSchema);
var db = mongoose.connect("mongodb://timmyb84:hey@kahana.mongohq.com:10009/app28998273");

app.post("/save", function(request, response){	
	
  	var newDrawing = new Drawing;
  	newDrawing.drawing = {data: request.body}; 
  	newDrawing.id = new mongoose.Types.ObjectId;

  	newDrawing.save(function (err, d) {	  	
		if (err) return console.error(err);		  

		Drawing.findRandom().limit(1).exec(function (err, d) {
			for (var i in d[0].drawing.data) {			
				response.writeHead(200, {'Content-Type': 'image/png' });
	     		response.end(i);
			}	  	
		});
  	});


 


});

app.listen(port, host);