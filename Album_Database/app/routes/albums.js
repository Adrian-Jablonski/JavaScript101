var express = require("express");
var router = express.Router();
var promise = require('bluebird');
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/album';
var db = pgp(connectionString);
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended :false}));

var options = {
    promiseLib : promise
}

router.get('/albums',function(req,res){
  
    // fetch albums from the database
    db.any('SELECT * FROM albums').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.render('albums',{'albums' : data});
    })
  })

router.post('/albums',function(req,res){
    // Picked up by form name from add_to_database.ejs file
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

router.get('/albums/json',function(req,res){

    // fetch albums from the database
    db.any('SELECT * FROM albums').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.status(200).json({
        status : 'success',
        albums : data
      })
    })
  
  })

module.exports = router;