// "npm install express" needs to be run for every project in a new folder
// sudo npm install -g nodemon
// sudo npm install -g reload
// npm install ejs

var express = require("express");
//var reload = require("reload")
var app = express();

var animals = [ 
    { name: 'cats', favorite: true },
    { name: 'dogs', favorite: true }, 
    { name: 'tree frogs', favorite: false }, 
    { name: 'earth worms', favorite: false }, 
    { name: 'guinea pigs', favorite: true }, ];

app.use(require("./routes/greet"));   // Links to files
app.use(require("./routes/fav_animals"));

app.set("view engine", "ejs");  // Sets up EJS
app.set("views", "views")   // Tells where to find the file. This depends on where the package.json files are saved and configured.

app.set("animals", animals);

app.listen(3000, function(){
    console.log('Port 3000!');
});

//reload(server, app);
