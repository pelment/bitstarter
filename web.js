var express = require('express');

var app = express.createServer(express.logger());

var buffer2 = new Buffer(256);
var buffer = fs.readFileSync('index.html', 'utf8');

var str = buffer.toString();

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
