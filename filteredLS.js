const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
const searchExt = "."+process.argv[3];

fs.readdir(dir, function(err, fileName) {
  if (err) {
    return console.log(err);
  }
  fileName.forEach(function(fileName) {
    var ext = path.extname(fileName);
    if (ext === searchExt) {
      console.log(fileName);
    }
  });
});
