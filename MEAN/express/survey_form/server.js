var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.set('views', (__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(session({secret:"secretKey"}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.render('index');
})
app.post('/result', function(req, res){
    req.session.context = req.body;
    res.redirect("/result");
})
app.get('/result', function(req, res){
    var context = req.session.context;
    req.session.destroy();
    res.render('result', { result: context});
})

app.listen(8000)
