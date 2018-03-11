const http = require("http");
const fs = require("fs");
var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, res) {
  var dataServed = fs.createReadStream(filePath);
  dataServed.pipe(res);
});

server.listen(port);
