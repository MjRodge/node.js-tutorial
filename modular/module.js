const fs = require("fs");
const path = require("path");

module.exports = function (dir, searchExt, callback) {
    fs.readdir(dir, function (err, fileName) {
        if (err) {
            return callback(err);
        }
        fileName = fileName.filter(function (fileName) {
            if (path.extname(fileName) === '.' + searchExt) {
                return true;
            }
        });
        return callback(null, fileName);
    });
};
