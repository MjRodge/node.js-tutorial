const net = require("net");
var port = process.argv[2];

function zeroFill(num) {
  if (num < 10) {
    return num = "0" + num;
  } else {
    return num;
  }
}

function dateFormat() {
  var date = new Date();
  return date.getFullYear() + "-"
  + zeroFill(date.getMonth() + 1) + "-"
  + zeroFill(date.getDate()) + " "
  + zeroFill(date.getHours()) + ":"
  + zeroFill(date.getMinutes());
}

var server = net.createServer(function (socket) {
  socket.end(dateFormat() + '\n');
});

server.listen(port);
