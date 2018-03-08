var fs = require('fs');
var total = undefined;

function calcNewLines(callback) {
    fs.readFile(process.argv[2], "utf8", function(err, fileContent) {
        if (err) {
            return console.log(err);
        }
        var array = fileContent.split("\n");
        total = array.length - 1;
        callback();
});
}
function logLineTotal() {
    console.log(total);
}

calcNewLines(logLineTotal);
