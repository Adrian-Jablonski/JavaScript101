var normalText;
var leetspeakText;
var textLength;

$("#submit").on("click", function() {
    $("#leetspeak").text("")
    normalText = (document.getElementById("normal_text").value).toLowerCase();
    textLength = normalText.length;    
    leetspeakText = ""
    
    for (var i = 0; i < textLength; i++) {
        if (normalText[i] === "a") {
            leetspeakText += "4"
        }
        else if (normalText[i] === "e") {
            leetspeakText += "3"
        }
        else if (normalText[i] === "g") {
            leetspeakText += "6"
        }
        else if (normalText[i] === "i") {
            leetspeakText += "1"
        }
        else if (normalText[i] === "o") {
            leetspeakText += "0"
        }
        else if (normalText[i] === "s") {
            leetspeakText += "5"
        }
        else if (normalText[i] === "t") {
            leetspeakText += "7"
        }
        else {
            leetspeakText += normalText[i]
        }
        
    }
    
    $("#leetspeak").append("<p>" + leetspeakText + "</p>");
    
});
    


