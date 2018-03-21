var normalText;
var newText;
var longVowelList = ["aa", "ee", "ii", "oo", "uu"]
var vowelList = ["a", "e", "i", "o", "u"]


$("#submit").on("click", function() {
    $("#leetspeak").text("")
    normalText = (document.getElementById("normal_text").value).toLowerCase();
    normalTextLen = longVowelList.length
    var found_long_vowel = false;
    for (var i = 0; i <= normalTextLen; i++) {
        longVowelIndex = normalText.indexOf(longVowelList[i])
        if (longVowelIndex !== -1) {
            newText = normalText.slice(0, longVowelIndex) + vowelList[i].repeat(3); 
            normalText = (document.getElementById("normal_text").value).toLowerCase();    
            newText += normalText.slice(longVowelIndex, normalTextLen * normalTextLen);
            found_long_vowel = true;
            break;
        }
        if (found_long_vowel === false) {
            newText = normalText;
        }
    }
    
    $("#longVowels").text(newText);
    
});
    


