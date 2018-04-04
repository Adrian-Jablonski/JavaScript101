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

router.get('/add_to_database',function(req,res){
    res.render('add_to_database');
  });

module.exports = router;