var path = require('path');
var app = require('express')();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

var messages = [];
app.get('/', function(req, res){
    res.render('index', {msgs: messages});
});

var io = require('socket.io').listen(app.listen(8000));
io.sockets.on('connection', function(socket){
    socket.on('new_message', function(message){
        messages.push(message);
        io.emit("messages_updated", message);
    });
});