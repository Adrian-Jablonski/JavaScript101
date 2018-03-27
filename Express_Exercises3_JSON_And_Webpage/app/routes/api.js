var express = require("express");
var router = express.Router();
var feedbackData = require("../data/animal_feedback.json")
var bodyParser = require('body-parser')
var fs = require('fs');

router.get("/api", function(req, res) {

    res.json(feedbackData);

});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res) {
  feedbackData.unshift(req.body);
  fs.writeFile('data/animal_feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  }); // saves to JSON file
  res.json(feedbackData);
});

router.delete('/api/:id', function(req, res) {
  console.log("testing delete");
  feedbackData.splice(req.params.id, 1);
  fs.writeFile('data/animal_feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});


module.exports = router;