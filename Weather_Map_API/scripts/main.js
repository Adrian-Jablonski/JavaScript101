window.onload = getLocation
var getCurrentLocation = true;
$("#check-weather").hide();

function getLocation() {
    // Finds user location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myMap);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function myMap(position) {
    navigator.geolocation.getCurrentPosition(function(position) {
        currLat = position.coords.latitude;
        currLong = position.coords.longitude;
        update_location();
        $("#check-weather").slideDown(2500);
    }, function() {
        $("#status").text("")
        getCurrentLocation = false;
        $("#check-weather").slideDown(2500);
    });
}

function update_location() {
    (function() {
        var url = "http://api.apixu.com/v1/forecast.json?key=";
        var apiKey = "072572d88ff3433a9e1203832180903"; 
        if (getCurrentLocation === true){
            var location = currLat + ", " + currLong;
            getCurrentLocation = false;
        }
        else {
            var location = document.getElementById("location").value;
        }
        
        var url2 = "&q=" + location;
        $.get(url + apiKey + url2).done(function(response) {
            console.log(response);
            updateUISuccess(response);
        }).fail(function(error) {
            console.log(error);
            updateUIError();	
        });

        // handle success
        function updateUISuccess(response) {
            $("#weather-information").show();
            $("#status").hide();
            var condition = response.current.condition.text;
            var degC = response.current.temp_c;
            var feelsLikeC = response.current.feelslike_c;
            var minTempC = response.forecast.forecastday[0].day.mintemp_c;
            var maxTempC = response.forecast.forecastday[0].day.maxtemp_c;
            var degF = response.current.temp_f;
            var currentLocation = response.location.name + ", " + response.location.region;
            var currentCountry = response.location.country;
            var localTime = response.location.localtime;
            // checks whether to use day or night icons
            var isDay = response.current.is_day;
            if (isDay === 1) {
                isDay = "day";
            }
            else {
                isDay = "night";
            }
            
            $("#condition").html(condition);
            
            $("#weather-box").html("<p>" + degC + "&#176; C. Feels like " + feelsLikeC + "&#176; C </p><p>max " + maxTempC + "&#176; C min " + minTempC + "&#176; C");
            
            $("#current-location").html(currentLocation);
            $("#current-country").html(currentCountry);
            $("#local-time").html("Local Time: " + localTime);
            
            $(".background-picture").attr("src", "images/weather_pictures/" + condition +".png");
            $("#weather-icon").attr("src", "images/weather_icons/" + isDay +"/" + condition + ".png");
        }

        // handle error
        function updateUIError() {
            $("#weather-information").hide();
            $("status").show();
            $("#status").html("Could not load current location weather")
        }

    })();

}

