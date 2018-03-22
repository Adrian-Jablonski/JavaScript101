var readline = require('readline');
var request = require('request');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('URL: ', function(url) {
  request.get(url, function(err, response, html) {
    if (err) {
      console.log(err.message);
      return;
    }
    rl.question('Filename: ', function(filename) {
      rl.close();
      fs.writeFile(filename, html, function(err) {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log('Saved to ' + filename + '.');
      });
    });
  });
});