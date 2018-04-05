var express = require('express');
var app = express();
var promise = require('bluebird');
var bodyParser = require('body-parser');
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/album';
var db = pgp(connectionString);
// var Sequalize = require('sequalize');   // used to be able to make changes to tables through code
// var sequelize = new Sequelize('postgres://localhost:5432/album');

var options = {
  promiseLib : promise
}

app.use(require("./routes/index"));
app.use(require("./routes/albums"));
app.use(require("./routes/artists"));
app.use(require("./routes/tracks"));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended :false}))

//public folder
app.use(express.static('public'));

var port = 3000;

var server = app.listen(port, function(){
    console.log('Example app listening on port ' + port);
});