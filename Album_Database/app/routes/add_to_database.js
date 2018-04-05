var express = require("express");
var router = express.Router();
var promise = require('bluebird');
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/album';
var db = pgp(connectionString);
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended :false}));
var albumData;

var options = {
    promiseLib : promise
}

router.get('/add_to_database',function(req,res){
    db.any('SELECT * FROM albums').then(function(albumData){
      db.any('SELECT * FROM artists').then(function(artistData){
        db.any('SELECT * FROM tracks').then(function(trackData) {
          res.render('add_to_database',{'albums' : albumData, 'artists' : artistData, 'tracks' : trackData});
        })
      })
    })
  });

router.post('/add_to_database',function(req,res){
    // Picked up by form name from add_to_database.ejs file
    let albumName = req.body.album_name;
    let albumYear = req.body.album_year;
    let artistId = parseInt(req.body.artist_id);
    let artistName = req.body.artist_name;
  
    db.none('INSERT INTO albums(album_name,album_year,artist_id) values($1,$2,$3)',[albumName,albumYear,artistId]).then(function(){
      db.any('SELECT * FROM albums').then(function(albumData){
        // res.render(page to render, object to pass to the page)
        res.render('add_to_database', {'albums' : albumData});
      })

    db.none('INSERT INTO artists(artist_name) values($1)',[artistName]).then(function(){
      db.any('SELECT * FROM artists').then(function(artistData){
        // res.render(page to render, object to pass to the page)
        res.render('artists', {'artists' : artistData});
      })
  
    })// end of 'then' promise  
  
    })// end of 'then' promise
  
  })

module.exports = router;