var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port);
app.get('/',function(req,res){
  res.sendfile(__dirname + '/index.html');
});
