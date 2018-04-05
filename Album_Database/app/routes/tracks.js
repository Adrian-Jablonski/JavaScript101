var express = require("express");
var router = express.Router();
var appModule = require('../app.js')
var promise = require('bluebird');
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/album';
var db = pgp(connectionString);
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended :false}));

var options = {
    promiseLib : promise
}

router.get('/tracks',function(req,res){

    // fetch artists from the database
    db.any('SELECT * FROM tracks').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.render('tracks',{'tracks' : data});
    })
  })

router.post('/tracks',function(req,res){

    let trackName = req.body.track_name;    // Picks up by form name from add_to_database.ejs file
    let album_id = req.body.album_id;
    let track_duration = "00:" + req.body.minutes + ":" + req.body.seconds;
  
    db.none('INSERT INTO tracks(track_name, album_id, track_duration) values($1, $2, $3)',[trackName, album_id, track_duration]).then(function(){
  
      db.any('SELECT * FROM tracks').then(function(data){
        // res.render(page to render, object to pass to the page)
        res.render('tracks', {'tracks' : data});
      })
  
    })// end of 'then' promise
  
  })

module.exports = router;