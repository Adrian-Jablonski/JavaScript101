// "npm install express" needs to be run for every project in a new folder

var express = require("express");

var dataFile = require("./data/houston_forecast.json");
var app = express();

app.get('/', function(req, res) {

    var location = dataFile.location;
    var current = dataFile.current;
    var forecast = dataFile.forecast


    var info = `
            <h2>${location.name}</h2>
            <p>${current.temp_c}&#176;C / ${current.temp_f}&#176;F</p>
            <p>${current.condition.text}</p>
            <p>Max Temp ${forecast.forecastday[0].day.maxtemp_c}&#176;C / ${forecast.forecastday[0].day.maxtemp_f}&#176;F</p>
        `;

    res.send(
        `
            <h1>Weather</h1>
            ${info}
        `
    );
    //run in browser by typing http://localhost:3000/
});

// app.get('/speaker/:speakerid', function(req, res) {

//     var speaker = dataFile.speakers[req.params.speakerid];

//     res.send(
//         `
//             <li>
//             <h1>${speaker.title}</h1>
//             <h2>${speaker.name}</h2>
//             <p>${speaker.summary}</p>
//             </li>
//         `
//     );
//     //run in browser by typing http://localhost:3000/speaker/0
// });


app.listen(3000, function(){
    console.log('Port 3000!');
});
