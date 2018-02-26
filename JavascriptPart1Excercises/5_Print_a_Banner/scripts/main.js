var bannerText;
var bannerWidth;

$("#submit").on("click", function() {
    $("#banner").text("")
    bannerText = document.getElementById("banner_text").value;
    bannerWidth = bannerText.length = 2;
    for (var i = 0; i < 3; i++){
        if (i === 0 || i === 2){
            astrisks = "*".repeat(bannerWidth);
        }
        else {
            astrisks = "* " + bannerText + " *";
        }
        
        $("#banner").append("<p>" + astrisks + "</p>");
    }
});
    


