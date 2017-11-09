var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = process.env.PORT || 3000;

server.listen(port);
app.get('/',function(req,res){
  res.sendfile(__dirname + '/index.html');
});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/liveRoom/:id',function(req,res){
	if(req.params.id=='2'){
		res.render('liveRoom.html',{liveRoom:'rtmp://47.94.140.170:1935/myapp/test1' , type:'rtmp/mp4'});
	}
	else{
		res.render('liveRoom.html',{liveRoom:'http://test.hdllive.ks-cdn.com/live/eef.flv' , type:'video/mp4'});
	}
});

