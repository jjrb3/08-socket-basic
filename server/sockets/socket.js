
const { io } = require('../server');


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
    client.on('sendMessage', (data, callback) => {

        console.log(data);

        // Send all people
        client.broadcast.emit('sendMessage', data);

        /*
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
        }*/
    });
});