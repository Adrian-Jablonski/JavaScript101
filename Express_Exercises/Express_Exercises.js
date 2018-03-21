var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
    //run in browser by typing http://localhost:3000/
});

app.get("/cats", function(req, res) {
    res.send("<h1>Meow</h1>");
    //run in browser by typing http://localhost:3000/cats
});

app.get("/dogs", function(req, res) {
    res.send("<h1>Woof</h1>");
    //run in browser by typing http://localhost:3000/dogs
});

app.get("/cats_and_dogs", function(req, res) {
    res.send("<h1>Living Together</h1>");
    //run in browser by typing http://localhost:3000/cats_and_dogs
});

app.get("/greet/:name", function(req, res) {
    var name = req.params.name;
    res.send("Hello, " + name + "!");
    //run in browser by typing http://localhost:3000/name/"enter a name"
})

// app.get("/year/:age", function(req, res) {
//     var age = req.params.age;
//     var yearBorn = 2018 - age;
//     res.send("You were born in " + yearBorn)
// })

app.get("/year", function(req, res) {
    var age = req.query.age;
    var yearBorn = 2018 - age;
    res.send("You were born in " + yearBorn)
    //run in browser by typing http://localhost:3000/year?age=27
})

app.listen(3000, function(){
    console.log("Port 3000!");
});