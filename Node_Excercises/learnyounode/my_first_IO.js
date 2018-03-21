var fs = require("fs");

var filename = process.argv[2];
var file = fs.readFileSync(filename);

var newLineList = file.toString().split("\n");
console.log(newLineList.length - 1);