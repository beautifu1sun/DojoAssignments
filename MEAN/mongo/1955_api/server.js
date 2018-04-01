var app = require('express')();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/basic_mongoose');

var PersonSchema = new mongoose.Schema({
   name: String 
});
mongoose.model('Person', PersonSchema);
var Person = mongoose.model("Person");

app.get('/', function(req,res){
    Person.find({}, function(err, people){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: "Success", people: people});
        }
    });
})
app.get('/new/:name', function(req,res){
    var newPerson = new Person({name: req.params.name});
    newPerson.save(function(err){
        if (err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: path.join("Success: ", req.params.name, " added.") });
        }
    })
});
app.get('/remove/:name', function(req,res){
    Person.remove({name: req.params.name}, function(err){
        if(err){
            res.json({ message: "Error", error: err});
        }
        else{
            res.json({ message: path.join("Success: ", req.params.name, " deleted.") });
        }
    });
});
app.get('/:name', function(req,res){
    
    Person.findOne({name: req.params.name}, function(err, person){
        if(err){
            res.json({message: "Error", error: err})
        }
        else{
            res.json({ message: "Success", person: person})
        }
    });
});
app.listen(8000);