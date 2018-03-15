var moment = require('moment');
var app = require('express')();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/basic_mongoose");

var CatSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    lifestyle: String
}, { timestamps: true });
mongoose.model('Cat', CatSchema);
var Cat = mongoose.model("Cat");

app.get('/', function(req,res){
    Cat.find({}, function(err, cats){
        if (err){
            console.log(err);
            res.render('index')
        }        
        else{
            res.render('index', {cats:cats, moment:moment})
        }

})});
app.get('/cats/new', function(req,res){
    res.render('new_cat');
});
app.get('/cats/:id', function(req,res){
    Cat.findOne({_id: req.params.id }, function(err, cat){
        if (err){
            console.log(err);
        }
        else{
            res.render('show', {cat:cat});
        }
    });
});

app.post('/cats/new', function(req,res){
    var newCat = new Cat({name: req.body.name, breed: req.body.breed, age: parseInt(req.body.age), lifestyle: req.body.lifestyle})
    newCat.save(function(err){
        if (err){
            console.log(err);
        }
        else{
            res.redirect('/');
        }
    });
});

app.get('/cats/destroy/:id', function(req,res){
    Cat.remove({_id: req.params.id}, function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/');
        }
    });
});

app.get('/cats/edit/:id', function(req,res){
    Cat.findOne({ _id: req.params.id }, function(err, cat){
        if(err){
            console.log(err);
            res.redirect('/');
        }
        else{
            res.render('edit.ejs', { cat: cat });
        }
    });
});

app.post('/cats/edit/:id', function(req,res){
    Cat.update({_id: req.params.id}, {name: req.body.name, breed: req.body.breed, age: parseInt(req.body.age), lifestyle: req.body.lifestyle}, function(err){
        if(err){
            console.log(err);
            res.redirect('/');
        }
        else{
            res.redirect('/');
        }
    });
});

app.listen(8000);