var express = require("express");
var router = express.Router();

router.get("/greet/:name", function(req, res) {
    var name = req.params.name;
    var age = req.query.age;
    var yearBorn = 2018 - age;

    res.render("index", {
        usersName: name,
        userYearBorn: yearBorn
    });
    //run in browser by typing http://localhost:3000/greet/"enter a name"?age="enter age"
});

module.exports = router;