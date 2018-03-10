// jQuery ajax method

var url; // fill in
var apiKey; // fill in with API key
var httpRequest;
makeRequest();

$.get(url + "&appid" + apiKey).done(function(response) {
    updateUISuccess(response);
}).fail(function(error) {
    updateUIError();
})

function updatedUISuccess(responseText) {
    var response = JSON.parse(httpRequest.responseText);  // creates an object out of the received data
    var condition = response.weather[0].main;
    var degC = response.main.temp - 273.15;
    var degCInt = Math.floor(degC);
    var degF = degC * 1.8 + 32;
    var defFInt = Math.floor(degF);
    var weatherBox = $("weatherBox"); // enter id of where the weather box is
    weatherBox.innerHTML = degCInt;
}

function updatedUIError() {
    var weatherBox = $("weatherBox");
    weatherBox.className = "hidden";
}