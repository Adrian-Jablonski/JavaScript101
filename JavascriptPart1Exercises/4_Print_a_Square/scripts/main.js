var squareSize;

$("#submit").on("click", function() {
    $("#square").text("")
    squareSize = Number(document.getElementById("square_size").value);
    astrisks = "*".repeat(squareSize);
    for (var i = 0; i < squareSize; i++){
        $("#square").append("<p>" + astrisks + "</p>");
    }
});
    


