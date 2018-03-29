// Run the below in the app folder above the app.js file path
// The package file should have main set to app/app.js
//npm init
// "npm install express" needs to be run for every project in a new folder
// sudo npm install -g nodemon
// sudo npm install -g reload
// npm install ejs
// npm install socket.io
// must run nodemon app.js from same path. Errors show up if running from another folder

var express = require("express");
var app = express();
app.use(express.static("public"));
var http = require("http").Server(app);
var io = require("socket.io")(http);
var clients = [];

app.set("view engine", "ejs");  // Sets up EJS
app.set("views", "views")

app.use(require("./routes/"));

app.get("/", function(req, res) {
    res.sendFile("index.ejs", {root: "views"});
});

io.on('connection', function(socket){
    console.log('a user connected');
    clients.push(socket);
    io.emit("chat message", "A new user connected. There are currently " + clients.length + " users online");
    socket.on('disconnect', function(){
      console.log('user disconnected');
      clients.splice(clients.indexOf(socket), 1);
      io.emit("chat message", "A user disconnected from the server. There are currently " + clients.length + " users online");
    });
    // Handle chat events and sends back to front end chat.js file
    socket.on('chat message', function(msg){ // Received from chat.js from the socket.on("chat message") line
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
    
    socket.on('user-login', function(msg){
      console.log('message: ' + msg);
      io.emit('user-login', msg);
    });

    socket.on("online-user-list", function(msg) {
      io.emit("online-user-list", msg);
    })

    socket.on("typing", function(msg) {
        console.log(msg);
        socket.broadcast.emit("typing", msg);
    })

  });

port = 3001;
http.listen(port, function(){
    console.log("Listening on port", port,"!");
});

