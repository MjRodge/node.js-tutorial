const http = require("http");
var url = process.argv[2];
var dataArray =[];

http.get(url, function (response) {
    response.setEncoding("utf8");
    response.on("data", function (data) {
        dataArray.push(data);
    });
    response.on('error', console.error);
    response.on("end",function () {
        console.log(dataArray.join("").length);
        console.log(dataArray.join(""));
    });
});
