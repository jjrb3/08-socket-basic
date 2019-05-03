
var socket = io();

// Listen information
socket.on('connect', function() {
    console.log('Connect to server');
});

// Listen information
socket.on('disconnect', function() {
    console.log('Connect lost');
});

// Send information
socket.emit('sendMessage', {
    user: 'Jeremy',
    message: 'Hello word!'
}, function(data) {
    console.log(data);
});


// Listen information
socket.on('sendMessage', function(data) {
    console.log(data);
});