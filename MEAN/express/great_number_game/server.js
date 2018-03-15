var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.set('views', (__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(session({secret: "key"}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    if (!req.session.num){
        req.session.num = Math.trunc(Math.random() * 100) + 1
    }
    res.render('index', {result: req.session.result})
})
app.post('/guess', function(req, res){
    var guess = parseInt(req.body.guess);
    var num = req.session.num;
    if (guess == num){
        req.session.result = num;
    }
    else if (guess > num){
        req.session.result = 'high';
    }
    else if (guess < num){
        req.session.result = 'low';
    }
    res.redirect('/');
})
app.get('/again', function(req, res){
    req.session.destroy()
    res.redirect('/')
})

app.listen(8000);