var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var string = file.toString();
var array = string.split("\n");

console.log(array.length - 1);
