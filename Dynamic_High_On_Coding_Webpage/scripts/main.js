var navigationTop = document.createElement("div");
//document.getElementsByTagName("div").classList.add("navigationTop");

var headingElement = document.createElement("h1");
headingElement.style.backgroundColor = "Lightblue"

var home = document.createElement("p");
navigationTop.appendChild(headingElement);
navigationTop.appendChild(home);

var headingText = document.createTextNode("HighOnCoding");
var homeText = document.createTextNode("Home");

headingElement.appendChild(headingText);
headingElement.appendChild(headingText);

var currentDiv = document.getElementById("container");
document.body.insertBefore(headingElement, currentDiv);


