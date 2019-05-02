const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// IO = Esta es la comunicación del Backend.
let io = socketIO(server);

io.on('connection', (client) => {

    console.log('User connect');

    client.emit('sendMessage', {
        user: 'admin',
        message: 'Welcome to this application'
    });

    client.on('disconnect', () => {
        console.log('User disconnect');
    });

    // Listen client
    client.on('sendMessage', (message, callback) => {

        //console.log(message);

        if (message.user) {
            callback({
                success: true,
                message: 'Information success'
            });
        }
        else {
            callback({
                success: false,
                message: 'Error in information'
            });
        }
    });
});


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});