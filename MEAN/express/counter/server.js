var express = require("express");
var bodyParser = require('body-parser');
var session = require("express-session");

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: "secretKey"}));

app.get('/', function(req,res){
    if (req.session.counter >= 0){ req.session.counter++; }
    else { req.session.counter = 0 }
    res.render('index', { counter: req.session.counter });
})
app.post('/add2', function(req,res){
    req.session.counter ++;
    res.redirect('/')
})
app.post('/reset', function(req,res){
    req.session.destroy();
    res.redirect('/')
})

app.listen("8000");
