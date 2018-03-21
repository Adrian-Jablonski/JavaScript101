var readline = require('readline');   // Import readline module
var dns = require('dns');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Domain name: ", function(domain_name) {
  dns.lookup(domain_name, (err, address, family) => {
    console.log('IP Address', address, family);
  });
  rl.close();
});