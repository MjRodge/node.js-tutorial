const http = require("http");
var urlArray = [];
urlArray.push(process.argv[2]);
urlArray.push(process.argv[3]);
urlArray.push(process.argv[4]);
var count = 0;
var outputArray = [];

function asyncURLdata (index) {
  http.get(urlArray[index], function(response){
    var data = [];
      data[index] = '';
      response.setEncoding('utf-8');
      response.on('error', function(err){
        console.log(err);
      });
      response.on('data', function(chunk){
        data[index] += chunk;
      });
      response.on('end', function(){
        outputArray[index] = data;
        count++;
        if (count == urlArray.length){
          for (var i = 0; i < urlArray.length; i++){
            console.log(outputArray[i][i]);
          }
        }
      });
  });
}

for (var i = 0; i < urlArray.length; i++) {
  asyncURLdata(i);
}
