const express = require('express');
const socketio = require('socket.io');
const http = require('http');
// const cors = require('cors');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
// app.use(cors());

const server = http.createServer(app); 
const io = socketio(server);


io.on('connection' , (socket) => {
    console.log('We have a new connection!!!');
    socket.on('join' , ({name , room}, callback) => {
        console.log(name , room);
    })

    socket.on('disconnect', () => {
        console.log('User has left!!!');
    })
});

app.use(router);


server.listen(PORT , () => console.log('Express server is running on port ', PORT));