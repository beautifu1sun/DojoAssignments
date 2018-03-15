var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

var count = 0

app.get('/', function(req,res){
    res.render('index', {counter: count});
});

var io = require('socket.io').listen(app.listen(8000));
io.sockets.on('connection', function(socket){
    socket.on('count_pressed', function(){
        io.emit('updated_count', ++count);
    });
    socket.on('reset_pressed', function(){
        count = 0
        io.emit('updated_count', count)
    });
});