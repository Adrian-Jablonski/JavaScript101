var fs = require("fs");

var filename = process.argv[2];
fs.readFile(filename, function (error, data) {
        if (error) {
          console.error(error.message);
          return;
        }
        var newLineList = data.toString().split("\n");
        console.log(newLineList.length - 1);
      });