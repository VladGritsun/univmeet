var fs = require('fs');
var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send(fs.readFileSync('login.html').toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});