var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {

    var animalFile = req.app.get("animalFile"); 
    var imgURLAll = []
    animalFile.pets.forEach(function(pet) {
        imgURLAll.push(pet.imgURL); 
    });

    res.render("index", {
        imgURLAll: imgURLAll
    });
    // console.log(imgURLAll);
    //run in browser by typing http://localhost:3000/
});

module.exports = router;