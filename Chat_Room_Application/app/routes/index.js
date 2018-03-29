var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {


    res.render("index", {
        pageTitle: "Home",
        pageID: "home",
    });

    //run in browser by typing http://localhost:3000/
});

module.exports = router;