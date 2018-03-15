var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("index");
});

var io = require('socket.io').listen(app.listen(8000));
io.sockets.on('connection', function(socket){
    socket.on('posting_form', function(data){
        var message = [];
        message.push('You emitted the following information to the server: { ');
        for (each in data){
            message.push(each);
            message.push(": '" + data[each] + "', ");
        }
        message[message.length-1] = message[message.length-1].slice(0,  message[message.length-1].length-2) + " }";
        socket.emit('updated_message', message.join(""));
        socket.emit('random_number', "You lucky number emitted by the server is " + (Math.trunc(Math.random() * 1000) + 1) + ".");
    });
});


