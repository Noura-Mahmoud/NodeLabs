const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// const path = require("path");
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname+"/public"));


app.get('/', (req, res) => {
//   res.sendFile(__dirname + 'home.ejs');
  res.render('home.ejs');
});


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

server.listen(PORT,'0.0.0.0', () => {
  console.log("http://localhost:"+ PORT);
});