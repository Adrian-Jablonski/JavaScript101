var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function (error, data) {
  if (error) {
    console.error(error.message);
    return;
  }
  data.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})