// $("#chat-section").hide();
var userName;
var timeout;

$(function () {
  var socket = io();
  var userName = $(".user-name").text();

// Emit events. Send to the socket.on('chat message') line of app.js
  $('#message-submission').submit(function(){
    var userName = $(".user-name").text();
    if (userName === "") {
      userName = "Guest";
    }
    
    console.log(userName == "");
    socket.emit('chat message', userName + ": " + $('#m').val());
    $('#m').val('');
    return false;
  });

  $("#log-in").click(function() {
    var userName = $("#user-name").val();
    socket.emit("user-login", userName + " joined the chatroom");
    $(".user-name").html(userName);
    $("#user-name, #log-in").hide();
    // Adds to online user list
    socket.emit("online-user-list", userName);

    return false;
  });


  
  $("#m").keypress(function() {
    var userName = $("#user-name").val();
    socket.emit("typing", userName);
  })

  $("#m").keyup(function() {
    var userName = $("#user-name").val();
    socket.emit("typing", userName);
    function typingTimeout() {
      console.log("Test");
      socket.emit("typing", false)
    }
    timeout = setTimeout(typingTimeout, 3000);

  });

  // Listen for events and outputs to browser
  socket.on('chat message', function(msg){
      $("#user-typing").html("");
      $('#messages').append($('<li>').text(msg));
  });

  socket.on('user-login', function(msg){
    $("#messages").append($("<li>").text(msg));

  });

  socket.on("online-user-list", function(msg) {
    $("#online-users").append($("<li>").text(msg));
  })

  socket.on("typing", function(msg) {
    console.log(msg);
    if (msg === false) {
      $("#user-typing").html("");
    }
    else {
      $("#user-typing").html("<p><em>" + msg + " is typing a message...</em></p>")
    }
    
  });

});
