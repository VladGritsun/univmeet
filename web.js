var fs = require('fs');
var express = require('express');
var io = require('socket.io');
var http = require('http');

var app = express();
var server = http.createServer(app);
var io = io.listen(server);

io.sockets.on('connection', function(socket){
	console.log('Client connected...');
	socket.on('log_in', function(data){
		console.log('Name: ' + data.user_name + ' Password: ' + data.password);
	});
});

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/index.html');
});

//Make css, js and other files viewable by html file
app.use(express.static(__dirname));

var port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log("Listening on " + port);
});