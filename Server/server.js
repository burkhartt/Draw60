var fs = require("fs");
var host = "127.0.0.1";
var port = 3000;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/WebSite"));

app.post("/save", function(request, response){
    response.send("Hello!!");
});

app.listen(port, host);