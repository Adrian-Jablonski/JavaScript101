var fs = require("fs")  // import IO module

// //Reading files
// var filename = "test.txt";

// fs.readFile(filename, function (error, buffer) {
//     if (error) {
//       console.error(error.message);
//       return;
//     }
//     console.log('File Data: ', buffer.toString());
//   });

// //Writing files
// filename = "write_file_text.txt"
//   fs.writeFile(filename, 'I love Node', function (error) {
//     if (error) {
//       console.error(error.message);
//       return;
//     }
//     console.log('File Save: ', filename);
//   });

// // User input
//   var readline = require('readline');   // Import readline module
//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   rl.question("How's it going? ", function(answer) {
//     console.log("Awesomesauce:", answer);
//     rl.close();
//   });

// Request a webpage
var request = require('request');
var url = 'https://nodejs.org/en/';
request.get(url, function (error, response, html) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(html);
});

