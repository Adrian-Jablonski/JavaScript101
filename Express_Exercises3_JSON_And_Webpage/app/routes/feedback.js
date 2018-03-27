var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');


router.get("/feedback", function(req, res) {

    res.render("feedback", {

    })

    //run in browser by typing http://localhost:3000/contact
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

module.exports = router;