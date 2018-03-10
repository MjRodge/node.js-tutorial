const dir = process.argv[2];
const searchExt = process.argv[3];
var module = require('./module.js');

var callback = function (err, fileName) {
  if (err) {
    return console.log(err);
  }
  fileName.forEach(function (fileName) {
    console.log(fileName);
  });
};

module(dir, searchExt, callback);
