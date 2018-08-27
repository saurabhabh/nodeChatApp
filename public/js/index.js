var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');  
});

socket.emit('createMessageEvent', {
  from: 'Saurabh',
  text: 'Hey. This is Saurabh.'
});

socket.on('newMessageEvent', function (message) {
  console.log('New Message', message);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});


