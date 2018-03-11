const http = require('http');
const url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req,res) {
  var reqURL = url.parse(req.url);
  var reqPath = url.parse(req.url).pathname;
  var time;

  console.log(req.url);

  if(reqPath == '/api/parsetime') {
    time = reqURL.query.substring(4);
    var urlTime = new Date(time);
    var hours = urlTime.getHours();
    var minutes = urlTime.getMinutes();
    var seconds = urlTime.getSeconds();
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify( {
      "hour": hours,
      "minute": minutes,
      "second": seconds
    }));
  }

  if (reqPath == '/api/unixtime') {
    time = reqURL.query.substring(4);
    urlTime = new Date(time);
    var unixdate = urlTime.getTime();
    console.log(unixdate);
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify( {
      "unixtime": unixdate
    }));
  }

  res.end();
});

server.listen(port);
