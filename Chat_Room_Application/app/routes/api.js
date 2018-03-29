var express = require("express");
var router = express.Router();
var feedbackData = require("../data/feedback.json")
var bodyParser = require('body-parser')

router.get("/api", function(req, res) {

    res.json(feedbackData);

});

router.post('/api', function(req, res) {
    feedbackData.unshift(req.body); // Shows most recent comment first
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
      if (err) {
        console.log(err);
      }
    });
    res.json(feedbackData);
  });

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()

module.exports = router;