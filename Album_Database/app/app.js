var express = require('express');
var app = express();
var promise = require('bluebird');
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended :false}))

// defined the options for the pg-promise library
var options = {
  promiseLib : promise
}

// configuring the pg-promise database connection
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/album';
var db = pgp(connectionString);



//public folder
app.use(express.static('app/public'));

app.get('/newalbum',function(req,res){
  res.render('newalbum');
});

app.post('/albums',function(req,res){

    let albumName = req.body.album_name;
    let albumYear = req.body.album_year;
    let artistId = parseInt(req.body.artist_id);
  
    db.none('INSERT INTO albums(album_name,album_year,artist_id) values($1,$2,$3)',[albumName,albumYear,artistId]).then(function(){
  
      db.any('SELECT * FROM albums').then(function(data){
        // res.render(page to render, object to pass to the page)
        res.render('albums', {'albums' : data});
      })
  
    })// end of 'then' promise
  
  })
  
  app.get('/albums',function(req,res){
  
    // fetch dishes from the database
    db.any('SELECT * FROM albums').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.render('albums',{'albums' : data});
    })
  })
  
  app.get('/albums/json',function(req,res){
  
    // fetch dishes from the database
    db.any('SELECT * FROM albums').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.status(200).json({
        status : 'success',
        dishes : data
      })
    })
  
  })
  
  app.get('/',function(req,res){
    res.send('hello world');
  })
var port = 3000;

var server = app.listen(port, function(){
    console.log('Example app listening on port ' + port);
});