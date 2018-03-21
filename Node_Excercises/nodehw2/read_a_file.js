var fs = require("fs")  // import IO module

// User input
var readline = require('readline');   // Import readline module

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("filename:", function(filename) {
  // reading file
  fs.readFile(filename, function (error, buffer) {
    if (error) {
      console.error(error.message);
      return;
    }
    console.log(buffer.toString());
  });
  rl.close();
});
