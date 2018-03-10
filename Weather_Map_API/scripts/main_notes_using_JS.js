var url; // fill in
var apiKey; // fill in with API key
var httpRequest;
makeRequest();

function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open("GET", url + "&appid" + apiKey);   // appid was used because the documentation said to use it
    httpRequest.send();
}

function responseMethod() {
    if (httpRequest.readyState === 4) {
        console.log(httpRequest.responseText);
        
        if (httpRequest.status === 200) {
            updateUISuccess(httpRequest.responseText);
        }
        else {
            updatedUIError();
        }
    }
}

function updatedUISuccess(responseText) {
    var response = JSON.parse(httpRequest.responseText);  // creates an object out of the received data
    var condition = response.weather[0].main;
    var degC = response.main.temp - 273.15;
    var degCInt = Math.floor(degC);
    var degF = degC * 1.8 + 32;
    var defFInt = Math.floor(degF);
    var weatherBox = document.getElementById("weatherBox"); // enter id of where the weather box is
    weatherBox.innerHTML = degCInt;
}

function updatedUIError() {
    var weatherBox = document.getElementById("weatherBox");
    weatherBox.className = "hidden";
}