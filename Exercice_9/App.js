const express    = require('express');
const http       = require('http')
const path       = require('path');

const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);

io.on('connection', function(socket){
    socket.on('send-message', function (_message) {
        console.log(_message)

        socket.emit('receive-message', "Hello world du serveur");

        socket.broadcast.emit('receive-message', "Hello world de la part d'un des clients");
    });
});

// Affichage de la page
app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname, './views/index.html'))
});

server.listen(8080);