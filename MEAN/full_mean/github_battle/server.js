var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/angularApp/dist/')));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String },
    score: { type: Number, required: true }
}, {timestamps: true});
mongoose.model("UserSchema", UserSchema);
var User = mongoose.model("UserSchema");

app.post('/addUser', (req,res)=>{
    newUser = new User(req.body);
    newUser.save(err=>{
        if (err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "New user has been successfully added to the database."});
        }
    });
});

app.get('/users', (req,res)=>{
    User.find().sort({score:-1}).exec((err,data)=>{
        if (err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ users: data });
        }
    }); 
});

app.get('/getresults', (req,res)=>{
    User.find().limit(2).sort({createdAt: -1}).exec((err,data)=>{
        if (err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ users: data });
        }
    });
});

app.get('*', (req,res,next)=>{
    res.sendFile(path.resolve('./angularApp/dist/index.html'));
});

app.listen(8000);