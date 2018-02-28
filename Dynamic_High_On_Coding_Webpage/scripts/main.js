// Navigation Top
var navigationTop = document.createElement("div");
navigationTop.setAttribute("class", "navigation_top");

var headingElement = document.createElement("h1");
headingElement.innerHTML = "HighOnCoding";

var home = document.createElement("h2");
home.innerHTML = "Home";

var categories = document.createElement("h2");
categories.innerHTML = "Categories";

// Inserts elements into the navigationTop div
navigationTop.appendChild(headingElement);
navigationTop.appendChild(home);
navigationTop.appendChild(categories);

var currentDiv = document.getElementById("container");
document.body.insertBefore(navigationTop, currentDiv);

// Curse of the current Reviews

var firstSection = document.createElement("div");
firstSection.setAttribute("class", "first_section");

var section1Title = document.createElement("h1");
section1Title.innerHTML = "Curse of the Current Reviews"

var section1Paragraph = document.createElement("p");
section1Paragraph.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependant on three important factors price, screenshot and review";

firstSection.appendChild(section1Title);
firstSection.appendChild(section1Paragraph);

document.body.insertBefore(firstSection, currentDiv);

// Hello Watchkit section

var secondSection = document.createElement("div");
secondSection.setAttribute("class", "second_section");

var section2Title = document.createElement("h2");
section2Title.innerHTML = "Hello WatchKit";

var section2Paragraph = document.createElement("p");
section2Paragraph.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of IOS 8.2 beta SDK release. The WatchKit framework enabled the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";

var likesAndComments1 = document.createElement("div");

var comments1 = document.createElement("p");
comments1.innerHTML = "12 comments";

var likes1 = document.createElement("p");
likes1.innerHTML = "124 likes";

secondSection.appendChild(section2Title);
secondSection.appendChild(section2Paragraph);
secondSection.appendChild(likesAndComments1);

likesAndComments1.appendChild(comments1);
likesAndComments1.appendChild(likes1);

document.body.insertBefore(secondSection, currentDiv);

// Introduction to swift section

var thirdSection = document.createElement("div");
thirdSection.setAttribute("class", "third_section");

var section3Title = document.createElement("h2");
section3Title.innerHTML = "Introduction to Swift";

var section3Paragraph = document.createElement("p");
section3Paragraph.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of IOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started";

var likesAndComments2 = document.createElement("div");

var comments2 = document.createElement("p");
comments2.innerHTML = "15 comments";

var likes2 = document.createElement("p");
likes2.innerHTML = "45 likes";

thirdSection.appendChild(section3Title);
thirdSection.appendChild(section3Paragraph);
thirdSection.appendChild(likesAndComments2);

likesAndComments2.appendChild(comments2);
likesAndComments2.appendChild(likes2);

document.body.insertBefore(thirdSection, currentDiv);

// ------- Styles -------------

navigationTop.style.backgroundColor = "Cornflowerblue";
navigationTop.style.color = "White";
navigationTop.style.width = "90%";
navigationTop.style.padding = "20px";
navigationTop.style.margin = "0 auto 25px auto";

headingElement.style.display = "inline";

home.style.display = "inline";
home.style.marginLeft = "100px";

categories.style.display = "inline";
categories.style.marginLeft = "100px";

firstSection.style.backgroundColor = "lightgrey";
firstSection.style.width = "80%";
firstSection.style.margin = "0 auto 0 auto";
firstSection.style.padding = "10px";

section1Title.style.marginBottom = "40px";

secondSection.style.width = "80%";
secondSection.style.margin = "0 auto 0 auto";
secondSection.style.padding = "10px";

section2Title.style.color = "blue";
section2Title.style.fontWeight = "300"
section2Title.style.marginBottom = "-10px"

likesAndComments1.style.backgroundColor = "Darkorange";
likesAndComments1.style.color = "White";
likesAndComments1.style.padding = "5px"
likesAndComments1.style.marginTop = "-15px";

comments1.style.display = "inline";
comments1.style.marginRight = "30px";

likes1.style.display = "inline";

thirdSection.style.width = "80%";
thirdSection.style.margin = "0 auto 0 auto";
thirdSection.style.padding = "10px";

section3Title.style.color = "blue";
section3Title.style.fontWeight = "300"
section3Title.style.marginBottom = "-10px"

likesAndComments2.style.backgroundColor = "Darkorange";
likesAndComments2.style.color = "White";
likesAndComments2.style.padding = "5px"
likesAndComments2.style.marginTop = "-15px";

comments2.style.display = "inline";
comments2.style.marginRight = "30px";

likes2.style.display = "inline";