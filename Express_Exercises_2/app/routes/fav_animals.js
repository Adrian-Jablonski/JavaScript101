var express = require("express");
var router = express.Router();

router.get("/fav_animals", function(req, res) {
    var animalList = [];
    var animals = req.app.get("animals");

    for (var i = 0; i < animals.length; i++) {
        if (animals[i]["favorite"] == true) {
            animalList.push(animals[i]["name"])
        }
    }

    res.send(
        `
        <p>${animalList}</p>
        `
    )

});

module.exports = router;