var name;
var subject;

$("#submit").on("click", function() {
    name = document.getElementById("name").value;
    subject = document.getElementById("subject").value;
    $("#madlib").text(name + "'s favorite subject in school is " + subject);
});
    


