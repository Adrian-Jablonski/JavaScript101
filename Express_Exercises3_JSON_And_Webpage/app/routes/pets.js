var express = require("express");
var router = express.Router();

router.get("/pets/:petName", function(req, res) {
    var animalFile = req.app.get("animalFile"); 
    var animal = animalFile.pets[req.params.petName];

    res.render("pets", {
        petName: animal.name,
        description: animal.description,
        imgURL: animal.imgURL

    })
    // Run using http://localhost:3000/pet/1
});

module.exports = router;