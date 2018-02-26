var boxWidth;
var boxHeight;

$("#submit").on("click", function() {
    $("#box").text("")
    boxWidth = Number(document.getElementById("box_width").value);
    boxHeight = Number(document.getElementById("box_height").value);
    for (var i = 0; i < boxHeight; i++){
        if (i === 0 || i === boxHeight - 1){
            astrisks = "*".repeat(boxWidth);
        }
        else {
            astrisks = "*" + "&nbsp;".repeat((boxWidth - 2) * 2) + "*";
        }
        
        
        $("#box").append("<p>" + astrisks + "</p>");
    }
});
    


