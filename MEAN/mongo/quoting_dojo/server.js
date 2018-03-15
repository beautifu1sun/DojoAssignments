var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var moment = require('moment');

var app = express();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended:true }));
mongoose.connect('mongodb://localhost/basic_mongoose');

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
}, { timestamps: true });
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.get('/', function(req,res){
    res.render('index');
});
app.get('/quotes', function(req,res){
    Quote.find().sort({createdAt: -1}).exec({}, function(err, quotes){
        if (err){
            console.log(err);
        }
        else{
            res.render('quotes', {quotes: quotes, moment:moment})
        }
})});
app.post('/quotes', function(req,res){
    var quote = new Quote({ name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if (err){
            console.log(err);
            res.redirect('/');
        }
        else {
            res.redirect('/quotes');
        }
    });
})

app.listen(8000);
