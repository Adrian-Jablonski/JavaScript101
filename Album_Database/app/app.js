var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(require("./routes/index"));
app.use(require("./routes/add_to_database"));
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