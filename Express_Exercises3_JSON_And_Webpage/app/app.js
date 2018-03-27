// Run the below in the app folder above the app.js file path
// The package file should have main set to app/app.js
//npm init
// "npm install express" needs to be run for every project in a new folder
// sudo npm install -g nodemon
// sudo npm install -g reload
// npm install ejs
// must run nodemon app.js from same path. Errors show up if running from another folder

var express = require("express");
var reload = require("reload");
var app = express();
var animalFile = require("./data/animals.json");

app.use(require("./routes/index"));  // Links to files
app.use(require("./routes/pets"));
app.use(require("./routes/feedback"));
app.use(require("./routes/api"));

app.set("view engine", "ejs");  // Sets up EJS
app.set("views", "views")   // Tells where to find the file. This depends on where the package.json files are saved and configured.

app.set("animalFile", animalFile);

app.use(express.static("public"));

var port = 3001
var server = app.listen(port, function(){
    console.log('Port' + port +' !');
});

// // Reload code here
reload(app);

server.listen(app.get('port'), function () {
  console.log('Web server listening on port ' + port + ' http://localhost:' + port);
})

